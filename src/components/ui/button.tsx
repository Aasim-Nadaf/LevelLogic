import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[14px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:bg-primary-active",
        secondary: "bg-surface-card border border-hairline-strong text-ink hover:bg-canvas-soft",
        download: "bg-ink text-canvas hover:bg-body-strong",
        outline: "border border-hairline bg-transparent hover:bg-canvas-soft text-ink",
        ghost: "hover:bg-canvas-soft text-ink",
        danger: "bg-semantic-error text-white hover:bg-opacity-90",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-[18px] py-[10px]",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-5",
        download: "h-11 px-5 py-[12px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
