"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { api } from "@/lib/api";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  userType?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (emailOrPhone: string, password: string) => Promise<boolean>;
  register: (name: string, phone: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function parseUser(data: {
  _id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  mobilenumber?: string;
  UserType?: string;
}): User {
  return {
    id: data._id ?? "",
    name: [data.firstname, data.lastname].filter(Boolean).join(" ") || "User",
    email: data.email ?? "",
    phone: data.mobilenumber ?? "",
    userType: data.UserType,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("muliya_user");
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { localStorage.removeItem("muliya_user"); }
    }
  }, []);

  const login = useCallback(async (emailOrPhone: string, password: string): Promise<boolean> => {
    try {
      const isEmail = emailOrPhone.includes("@");
      const payload = isEmail
        ? { email: emailOrPhone, password }
        : { mobilenumber: emailOrPhone, password };

      const res = await api.post<{
        success: boolean;
        token?: string;
        userId?: string;
        UserType?: string;
        user?: { _id: string; firstname: string; lastname: string; email: string; mobilenumber: string; UserType: string };
        message?: string;
      }>("/user/login", payload);

      if (!res.success) {
        toast.error(res.message ?? "Invalid credentials");
        return false;
      }

      if (res.token) {
        localStorage.setItem("muliya_auth_token", res.token);
      }

      const userData = res.user
        ? parseUser(res.user)
        : { id: res.userId ?? "", name: "User", email: emailOrPhone, phone: "", userType: res.UserType };

      setUser(userData);
      localStorage.setItem("muliya_user", JSON.stringify(userData));
      toast.success(`Welcome back, ${userData.name}!`);
      return true;
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Login failed");
      return false;
    }
  }, []);

  const register = useCallback(async (
    name: string,
    phone: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const [firstname, ...rest] = name.trim().split(" ");
      const lastname = rest.join(" ") || "";

      const res = await api.post<{
        success: boolean;
        token?: string;
        userId?: string;
        UserType?: string;
        user?: { _id: string; firstname: string; lastname: string; email: string; mobilenumber: string; UserType: string };
        message?: string;
        error?: string;
      }>("/user/register", {
        firstname,
        lastname,
        email,
        password,
        mobilenumber: phone,
        UserType: "1",
        lang: "1",
      });

      if (!res.success) {
        toast.error(res.message ?? res.error ?? "Registration failed");
        return false;
      }

      if (res.token) {
        localStorage.setItem("muliya_auth_token", res.token);
      }

      const userData = res.user
        ? parseUser(res.user)
        : { id: res.userId ?? "", name, email, phone, userType: res.UserType ?? "1" };

      setUser(userData);
      localStorage.setItem("muliya_user", JSON.stringify(userData));
      toast.success("Account created successfully!");
      return true;
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Registration failed");
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("muliya_user");
    localStorage.removeItem("muliya_auth_token");
    toast.success("Logged out successfully");
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
