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
    primary:
      'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:shadow-inner',
    secondary:
      'bg-blue-50 text-slate-800 border border-slate-200 hover:bg-slate-50 active:bg-slate-100 active:shadow-inner',
    ghost:
      'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 active:shadow-inner',
    danger:
      'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 active:shadow-inner',
  }[variant]

  const sizeClass = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-9 px-4 text-sm',
    lg: 'h-10 px-4 text-base',
  }[size]

  return (
    <button
      className={cn(
        'relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-transform transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 active:translate-y-px active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:translate-y-0 disabled:active:scale-100',
        variantClass,
        sizeClass,
        className,
      )}
      aria-busy={isLoading}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </span>
      ) : null}
      <span className={cn('inline-flex items-center gap-2', isLoading && 'opacity-0')}>
        {leftIcon}
        {children}
        {rightIcon}
      </span>
    </button>
  )
}

export default Button
