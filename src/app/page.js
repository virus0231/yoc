"use client";

import "./css/style.scss";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { GCButton, GCCard, GCPasswordField, GCTextField } from "@/components";

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff]/80 via-[#e0f7fa]/70 to-[#f0fdf4]/90 p-4">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="w-full max-w-md"
      >
        <GCCard className="relative p-12 rounded-3xl shadow-2xl backdrop-blur-2xl border border-[#c7d2fe]/40 overflow-hidden">
          <div className="absolute -top-14 -left-14 w-48 h-48 bg-gradient-to-br from-[#a5b4fc]/40 to-[#6ee7b7]/40 rounded-full blur-2xl opacity-60 z-0 animate-pulse" />
          <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-gradient-to-tr from-[#6ee7b7]/40 to-[#a5b4fc]/40 rounded-full blur-2xl opacity-50 z-0 animate-pulse" />

          <div className="relative z-10 flex flex-col items-center">
            <img
              src="https://www.youronlineconversation.com/wp-content/uploads/2015/12/logoyoc.png"
              alt="Logo"
              className="h-20 mb-4 drop-shadow-xl animate-fade-in"
            />
            <h2 className="text-4xl font-extrabold text-center mb-2 text-[#312e81] tracking-tight animate-fade-in">
              Welcome Back
            </h2>
            <p className="text-center text-[#64748b] mb-8 animate-fade-in text-base">
              Sign in to your account to continue
            </p>
          </div>

          <div className="space-y-6 relative z-10">
            <div>
              <GCTextField
                name="user_name"
                control={control}
                placeholder="User Name"
                className="rounded-2xl bg-[#f8fafc]/90 focus:bg-white/100 border border-[#c7d2fe] shadow-md px-5 py-4 text-lg transition-all duration-200 focus:ring-2 focus:ring-[#a5b4fc]/40 text-[#312e81]"
              />
              {errors.user_name && (
                <p className="text-xs text-red-500 mt-1 ml-1">{errors.user_name.message}</p>
              )}
            </div>

            <div>
              <GCPasswordField
                control={control}
                name="user_password"
                placeholder="Password"
                className="rounded-2xl bg-[#f8fafc]/90 focus:bg-white/100 border border-[#c7d2fe] shadow-md px-5 py-4 text-lg transition-all duration-200 focus:ring-2 focus:ring-[#6ee7b7]/40 text-[#312e81]"
              />
              {errors.user_password && (
                <p className="text-xs text-red-500 mt-1 ml-1">{errors.user_password.message}</p>
              )}
            </div>

            <div className="flex justify-between items-center mt-2">
              <a
                href="#"
                className="text-xs text-[#6366f1] hover:underline font-medium transition"
              >
                Forgot password?
              </a>
              <GCButton
                type="submit"
                variant="primary"
                className="py-4 px-10 rounded-2xl bg-gradient-to-r transition-all duration-300 text-lg tracking-wide"
              >
                Sign In
              </GCButton>
            </div>
          </div>
        </GCCard>
      </form>
    </div>
  );
}
