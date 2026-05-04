import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export const createTestSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  durationMinutes: z.coerce.number().min(5, { message: "Minimum duration is 5 minutes" }),
  totalQuestions: z.coerce.number().min(1, { message: "Must have at least 1 question" }),
  passPercentage: z.coerce.number().min(1).max(100),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
});

export type CreateTestFormData = z.infer<typeof createTestSchema>;
