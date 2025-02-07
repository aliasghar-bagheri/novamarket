'use client';

import { Loader } from 'lucide-react';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonVariants = {
  default: 'btn-default',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  danger: 'btn-danger',
  outline: 'btn-outline',
  link: 'btn-link',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'ghost' | 'danger' | 'outline' | 'link';
  isLoading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'default', fullWidth = false, isLoading, className = '', children, ...props },
    ref
  ) => {
    const buttonVariant = buttonVariants[variant];

    return (
      <button
        className={`btn ${className} ${buttonVariant} ${fullWidth && 'w-full'}`}
        ref={ref}
        {...props}
      >
        {isLoading && <Loader className="animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
