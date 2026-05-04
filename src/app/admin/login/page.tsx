"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormData } from "@/lib/validators";
import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layers, ShieldCheck, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data.email, "admin");
    router.push("/admin/dashboard");
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
            <ShieldCheck className="w-8 h-8 text-white" />
          </div>

          <h1 className="text-5xl font-bold leading-tight mb-6 max-w-md">
            Administrative <br />
            Control Center.
          </h1>
          <p className="text-lg font-medium text-primary-foreground/70 max-w-sm leading-relaxed">
            Securely manage test environments, monitor candidate progress, and
            maintain the integrity of your assessment systems.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-8 text-sm font-semibold opacity-60">
          <span>&copy; {new Date().getFullYear()} LevelLogic Admin</span>
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Security
          </Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Logs
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex flex-col p-8 md:p-12 lg:p-20 bg-canvas">
        <div className="mb-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-text-muted hover:text-text-main transition-colors group lg:hidden"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        <div className="w-full max-w-[440px] mx-auto py-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-text-main mb-3">
              Admin Portal
            </h2>
            <p className="text-text-muted font-medium">
              Enter your credentials to access the console.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2.5">
              <Label
                htmlFor="email"
                className="text-sm font-bold text-text-main"
              >
                Administrator Email
              </Label>
              <Input
                id="email"
                type="email"
                className="h-12 rounded-xl border-hairline focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="admin@levellogic.com"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-xs font-bold text-danger-text mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <Label
                  htmlFor="password"
                  className="text-sm font-bold text-text-main"
                >
                  Master Password
                </Label>
                <Link
                  href="#"
                  className="text-xs font-bold text-text-muted hover:text-text-main transition-colors"
                >
                  Contact Security
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                className="h-12 rounded-xl border-hairline focus:ring-primary focus:border-primary transition-all px-4"
                placeholder="••••••••"
                {...register("password")}
                aria-invalid={!!errors.password}
              />
              {errors.password && (
                <p className="text-xs font-bold text-danger-text mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold shadow-premium hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Initialize Admin Session
            </Button>
          </form>

          <div className="mt-10 pt-8 border-t border-surface-soft text-center text-sm font-medium text-text-muted">
            Looking for the student portal?{" "}
            <Link
              href="/student/login"
              className="text-text-main font-bold hover:underline transition-all"
            >
              Student login
            </Link>
          </div>
        </div>

        <div className="mt-auto pt-12 flex justify-center lg:hidden">
          <p className="text-xs font-semibold text-text-subtle tracking-wider uppercase">
            &copy; {new Date().getFullYear()} LevelLogic Admin Console
          </p>
        </div>
      </div>
    </div>
  );
}
