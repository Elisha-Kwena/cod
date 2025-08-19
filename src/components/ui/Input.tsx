import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        className={cn(
          "flex h-10 w-full rounded-lg border px-3 py-2 transition-colors",
          "bg-white dark:bg-dark700 border-gray-300 dark:border-dark700",
          "text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-chrome",
          "focus:outline-none focus:ring-2 focus:ring-electric focus:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-candy focus:ring-candy",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
