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
      'border border-slate-300 bg-white text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:border-slate-400 hover:bg-slate-50 hover:text-slate-800 active:border-slate-500 active:bg-slate-100 active:text-slate-900 active:shadow-inner',
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
