import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const variantClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-blue-50 text-slate-800 border border-slate-200 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  }[variant]

  const sizeClass = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-4 text-base',
  }[size]

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50',
        variantClass,
        sizeClass,
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {leftIcon}
      {isLoading ? 'Loading...' : children}
      {rightIcon}
    </button>
  )
}

export default Button
