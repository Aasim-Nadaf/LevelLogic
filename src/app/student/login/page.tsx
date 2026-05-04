"use client"

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormData } from "@/lib/validators";
import { useAuthStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function StudentLoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    login(data.email, 'student');
    router.push('/student/dashboard'); // student dashboard
  };

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Panel */}
      <div className="hidden lg:flex w-[40%] bg-ocean-deep flex-col justify-center px-16 text-white">
        <h1 className="text-4xl font-bold mb-4">AptitudePro</h1>
        <p className="text-lg font-normal text-white/80">
          Sharpen your skills and ace every test with our premium practice platform.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-[400px] bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-lg)] p-9">
          <h2 className="text-[22px] font-semibold text-ocean-deep mb-2">Student Login</h2>
          <p className="text-sm text-ocean-muted mb-6">Enter your credentials to access your account.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p className="text-[12px] text-danger-text">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
                aria-invalid={!!errors.password}
              />
              {errors.password && (
                <p className="text-[12px] text-danger-text">{errors.password.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full mt-2">
              Login to Dashboard
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-ocean-mid-text">
            Don't have an account?{" "}
            <Link href="/student/register" className="text-ocean font-semibold hover:underline">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
