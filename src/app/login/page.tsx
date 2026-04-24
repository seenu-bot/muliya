"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = loginMethod === "email" ? "Email is required" : "Phone number is required";
    } else if (loginMethod === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailOrPhone)) {
        newErrors.emailOrPhone = "Please enter a valid email address";
      }
    } else if (loginMethod === "phone") {
      if (!/^\d{10}$/.test(formData.emailOrPhone.replace(/\D/g, ""))) {
        newErrors.emailOrPhone = "Please enter a valid 10-digit phone number";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    const success = await login(formData.emailOrPhone, formData.password);
    setIsLoading(false);

    if (success) {
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <img
              src="/images/Logo-1.svg"
              alt="Muliya"
              className="h-12 mx-auto mb-4"
            />
          </Link>
          <h1 className="text-2xl font-serif text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Sign in to your Muliya account</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          {/* Login Method Toggle */}
          <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
            <button
              type="button"
              onClick={() => {
                setLoginMethod("email");
                setFormData({ ...formData, emailOrPhone: "" });
                setErrors({});
              }}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                loginMethod === "email"
                  ? "bg-white text-[#E92247] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Mail className="w-4 h-4 inline mr-2" />
              Email
            </button>
            <button
              type="button"
              onClick={() => {
                setLoginMethod("phone");
                setFormData({ ...formData, emailOrPhone: "" });
                setErrors({});
              }}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                loginMethod === "phone"
                  ? "bg-white text-[#E92247] shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Phone className="w-4 h-4 inline mr-2" />
              Phone
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email or Phone Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {loginMethod === "email" ? "Email Address" : "Phone Number"}
              </label>
              <div className="relative">
                {loginMethod === "email" ? (
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                ) : (
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                )}
                <input
                  type={loginMethod === "email" ? "email" : "tel"}
                  value={formData.emailOrPhone}
                  onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                  placeholder={loginMethod === "email" ? "Enter your email" : "Enter your phone number"}
                />
              </div>
              {errors.emailOrPhone && (
                <p className="text-sm text-red-500 mt-1">{errors.emailOrPhone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E92247]/20 focus:border-[#E92247] outline-none"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link href="#" className="text-sm text-[#E92247] hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#E92247] text-white py-3 rounded-lg font-medium hover:bg-[#d11f3f] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                "Signing In..."
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-gray-600 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#E92247] font-medium hover:underline">
              Create Account
            </Link>
          </p>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Secure Login</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Data Protected</span>
          </div>
        </div>
      </div>
    </main>
  );
}
