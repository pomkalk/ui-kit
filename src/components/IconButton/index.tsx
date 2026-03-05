import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

type IconButtonVariant = 'primary' | 'secondary' | 'ghost'
type IconButtonSize = 'sm' | 'md' | 'lg'

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  variant?: IconButtonVariant
  size?: IconButtonSize
  label: string
}

export function IconButton({
  icon,
  variant = 'secondary',
  size = 'md',
  label,
  className,
  ...props
}: IconButtonProps) {
  const variantClass = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
  }[variant]

  const sizeClass = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-10 w-10',
  }[size]

  return (
    <button
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-50',
        variantClass,
        sizeClass,
        className,
      )}
      type="button"
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton
