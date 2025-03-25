
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 dark:after:bg-filigree-pattern dark:after:bg-contain dark:after:bg-center dark:after:absolute dark:after:inset-0 dark:after:opacity-0 dark:hover:after:opacity-10 dark:after:transition-opacity dark:hover:shadow-gold relative overflow-hidden",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:border-red-800/40",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground dark:border-filigree/40 dark:hover:border-filigree dark:hover:bg-filigree/5 dark:hover:shadow-gold",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-royal-light dark:text-filigree dark:border dark:border-filigree/20 dark:hover:border-filigree/50 dark:after:bg-filigree-pattern dark:after:bg-contain dark:after:bg-center dark:after:absolute dark:after:inset-0 dark:after:opacity-0 dark:hover:after:opacity-10 dark:after:transition-opacity",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-filigree/10 dark:hover:text-filigree dark:hover:shadow-gold/20",
        link: "text-primary underline-offset-4 hover:underline dark:text-filigree",
        royal: "bg-royal text-filigree border border-filigree/30 hover:bg-royal-light hover:border-filigree/60 hover:shadow-gold relative overflow-hidden after:absolute after:inset-0 after:bg-filigree-pattern after:bg-no-repeat after:bg-center after:bg-contain after:opacity-0 hover:after:opacity-10 after:transition-opacity",
        filigree: "bg-filigree text-royal-dark hover:bg-filigree-light relative overflow-hidden after:absolute after:inset-0 after:bg-filigree-pattern after:bg-no-repeat after:bg-center after:bg-contain after:opacity-0 hover:after:opacity-20 after:transition-opacity hover:shadow-gold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
