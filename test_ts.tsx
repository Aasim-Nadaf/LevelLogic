import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTestSchema, CreateTestFormData } from "./src/lib/validators";
import { z } from "zod";

function Test() {
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

  const onSubmit = (data: CreateTestFormData) => {};

  return <form onSubmit={handleSubmit(onSubmit)}></form>;
}
