"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { toast } from "sonner";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (emailOrPhone: string, password: string) => Promise<boolean>;
  register: (name: string, phone: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("muliya_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("muliya_user");
      }
    }
  }, []);

  const login = useCallback(async (emailOrPhone: string, password: string): Promise<boolean> => {
    // Get stored users from localStorage
    const users = JSON.parse(localStorage.getItem("muliya_users") || "[]");
    
    // Find user by email or phone
    const foundUser = users.find(
      (u: User & { password: string }) => 
        (u.email === emailOrPhone || u.phone === emailOrPhone) && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem("muliya_user", JSON.stringify(userWithoutPassword));
      toast.success(`Welcome back, ${foundUser.name}!`);
      return true;
    } else {
      toast.error("Invalid email/phone or password");
      return false;
    }
  }, []);

  const register = useCallback(async (
    name: string, 
    phone: string, 
    email: string, 
    password: string
  ): Promise<boolean> => {
    // Get stored users
    const users = JSON.parse(localStorage.getItem("muliya_users") || "[]");

    // Check if email or phone already exists
    const existingUser = users.find(
      (u: User) => u.email === email || u.phone === phone
    );

    if (existingUser) {
      if (existingUser.email === email) {
        toast.error("Email already registered");
      } else {
        toast.error("Phone number already registered");
      }
      return false;
    }

    // Create new user
    const newUser = {
      id: crypto.randomUUID(),
      name,
      phone,
      email,
      password, // In production, hash this password
    };

    // Save to users list
    users.push(newUser);
    localStorage.setItem("muliya_users", JSON.stringify(users));

    // Auto login after registration
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem("muliya_user", JSON.stringify(userWithoutPassword));

    toast.success("Account created successfully!");
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("muliya_user");
    toast.success("Logged out successfully");
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
