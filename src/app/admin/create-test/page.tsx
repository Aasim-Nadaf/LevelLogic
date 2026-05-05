"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTestSchema, type CreateTestFormData } from "@/lib/validators";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AdminCreateTestPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.input<typeof createTestSchema>, any, CreateTestFormData>({
    resolver: zodResolver(createTestSchema),
    defaultValues: {
      difficulty: "Medium",
    },
  });

  const onSubmit = (data: CreateTestFormData) => {
    console.log("Test Created:", data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="max-w-[640px] mx-auto">
      <h1 className="text-2xl font-bold text-ocean-deep mb-6">
        Create New Test
      </h1>

      {isSuccess && (
        <div className="mb-6 flex items-center gap-3 p-4 bg-success-bg border border-success-border rounded-[10px] text-success-text">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-semibold text-sm">
            Test created successfully! You can now add questions.
          </span>
        </div>
      )}

      <div className="bg-white border border-border rounded-[14px] shadow-[var(--shadow-card-md)] p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Test Name</Label>
            <Input
              id="title"
              placeholder="e.g. TCS NQT Mock Test 1"
              {...register("title")}
              aria-invalid={!!errors.title}
            />
            {errors.title && (
              <p className="text-[12px] text-danger-text">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger
                    id="subject"
                    className={cn(
                      "w-full h-[42px] rounded-[10px] border border-border bg-surface-bg-light px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20",
                      errors.subject && "border-danger-border ring-danger-border/20",
                    )}
                  >
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Quantitative Aptitude">
                      Quantitative Aptitude
                    </SelectItem>
                    <SelectItem value="Logical Reasoning">Logical Reasoning</SelectItem>
                    <SelectItem value="Technical Skills">Technical Skills</SelectItem>
                    <SelectItem value="Verbal English">Verbal English</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.subject && (
              <p className="text-[12px] text-danger-text">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="durationMinutes">Duration (Minutes)</Label>
              <Input
                id="durationMinutes"
                type="number"
                {...register("durationMinutes")}
              />
              {errors.durationMinutes && (
                <p className="text-[12px] text-danger-text">
                  {errors.durationMinutes.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="totalQuestions">Total Questions</Label>
              <Input
                id="totalQuestions"
                type="number"
                {...register("totalQuestions")}
              />
              {errors.totalQuestions && (
                <p className="text-[12px] text-danger-text">
                  {errors.totalQuestions.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="passPercentage">Pass Percentage (%)</Label>
              <Input
                id="passPercentage"
                type="number"
                {...register("passPercentage")}
              />
              {errors.passPercentage && (
                <p className="text-[12px] text-danger-text">
                  {errors.passPercentage.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty</Label>
              <Controller
                control={control}
                name="difficulty"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger
                      id="difficulty"
                      className="w-full h-[42px] rounded-[10px] border border-border bg-surface-bg-light px-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20"
                    >
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              rows={4}
              {...register("description")}
              className={cn(
                "w-full rounded-[10px] border border-border bg-surface-bg-light p-3 text-sm text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/20 resize-none",
                errors.description &&
                  "border-danger-border ring-danger-border/20",
              )}
            />
            {errors.description && (
              <p className="text-[12px] text-danger-text">
                {errors.description.message}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full h-12">
            Create Test
          </Button>
        </form>
      </div>
    </div>
  );
}
