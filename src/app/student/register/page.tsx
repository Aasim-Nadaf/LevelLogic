"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { registerSchema, type RegisterFormData } from "@/lib/validators";
import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layers, ArrowLeft, Sparkles } from "lucide-react";

export default function StudentRegisterPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    login(data.email, 'student');
    router.push('/student/dashboard');
  };

  return (
    <div className="flex min-h-screen bg-canvas font-sans selection:bg-surface-mid">
      {/* Left Panel - Visual */}
      <div className="hidden lg:flex w-[45%] bg-primary flex-col justify-between p-12 text-primary-foreground relative overflow-hidden">
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-2 mb-20 group">
            <div className="w-10 h-10 bg-primary-foreground rounded-xl flex items-center justify-center transition-transform group-hover:scale-105">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">LevelLogic</span>
          </Link>
          
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/10">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-5xl font-bold leading-tight mb-6 max-w-md">
            The standard <br />for logic prep.
          </h1>
          <p className="text-lg font-medium text-primary-foreground/70 max-w-sm leading-relaxed">
            Create your account today and gain access to thousands of custom-tailored logic assessments and cognitive growth tracking.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-8 text-sm font-semibold opacity-60">
          <span>&copy; {new Date().getFullYear()} LevelLogic</span>
          <Link href="#" className="hover:opacity-100 transition-opacity">Privacy</Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">Terms</Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col p-8 md:p-12 lg:p-20 bg-canvas">
        <div className="mb-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-text-muted hover:text-text-main transition-colors group lg:hidden">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-[440px] mx-auto py-8">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-text-main mb-3">Create Account</h2>
            <p className="text-text-muted font-medium">Start your journey to cognitive excellence.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2.5">
              <Label htmlFor="name" className="text-sm font-bold text-text-main">Full Name</Label>
              <Input
                id="name"
                className="h-12 rounded-xl border-hairline focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="Aarav Sharma"
                {...register("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="text-xs font-bold text-danger-text mt-1">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="email" className="text-sm font-bold text-text-main">Email Address</Label>
              <Input
                id="email"
                type="email"
                className="h-12 rounded-xl border-hairline focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="name@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs font-bold text-danger-text mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2.5">
              <Label htmlFor="password" className="text-sm font-bold text-text-main">Password</Label>
              <Input
                id="password"
                type="password"
                className="h-12 rounded-xl border-hairline focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="••••••••"
                {...register("password")}
                aria-invalid={!!errors.password}
              />
              {errors.password && (
                <p className="text-xs font-bold text-danger-text mt-1">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold shadow-premium hover:scale-[1.01] active:scale-[0.99] transition-all">
              Initialize Account
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-surface-soft text-center text-sm font-medium text-text-muted">
            Already have an account?{" "}
            <Link href="/student/login" className="text-text-main font-bold hover:underline transition-all">
              Sign in instead
            </Link>
          </div>
        </div>

        <div className="mt-auto pt-12 flex justify-center lg:hidden">
          <p className="text-xs font-semibold text-text-subtle tracking-wider uppercase">
            &copy; {new Date().getFullYear()} LevelLogic Platform
          </p>
        </div>
      </div>
    </div>
  );
}

