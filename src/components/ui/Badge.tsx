import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-electric text-white hover:bg-neon_blue",
        secondary: "border-gray-200 dark:border-dark700 bg-gray-100 dark:bg-dark700 text-gray-700 dark:text-chrome hover:bg-gray-200 dark:hover:bg-dark700/80",
        destructive: "border-transparent bg-candy text-white hover:bg-tart",
        outline: "text-gray-700 dark:text-chrome border-gray-300 dark:border-dark700 hover:bg-gray-100 dark:hover:bg-dark700",
        success: "border-transparent bg-lime_green text-black hover:bg-lime_green/80",
        warning: "border-transparent bg-sunflower text-black hover:bg-pantone",
        info: "border-transparent bg-neon_blue text-white hover:bg-electric",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
