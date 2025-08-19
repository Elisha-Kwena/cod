import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-electric hover:bg-neon_blue text-white",
        destructive: "bg-candy hover:bg-tart text-white",
        outline: "border border-electric text-electric hover:bg-electric hover:text-white",
        secondary: "bg-gray-200 hover:bg-gray-300 dark:bg-dark700 dark:hover:bg-dark700/80 text-gray-900 dark:text-white",
        ghost: "hover:bg-gray-100 dark:hover:bg-dark700 text-gray-700 dark:text-chrome hover:text-gray-900 dark:hover:text-white",
        link: "text-electric underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-electric to-neon_blue text-white hover:from-neon_blue hover:to-electric",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-8 text-lg",
        xl: "h-14 px-10 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
