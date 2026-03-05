import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonType = 'primary' | 'default' | 'dashed' | 'text' | 'link'
type ButtonShape = 'default' | 'circle' | 'round'
type ButtonSize = 'sm' | 'md' | 'lg' | 'small' | 'middle' | 'large'
type NativeButtonType = 'button' | 'submit' | 'reset'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonType | NativeButtonType
  htmlType?: NativeButtonType
  variant?: ButtonVariant
  danger?: boolean
  ghost?: boolean
  block?: boolean
  shape?: ButtonShape
  size?: ButtonSize
  icon?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  loading?: boolean
  isLoading?: boolean
}

export function Button({
  type,
  htmlType,
  variant = 'primary',
  danger = false,
  ghost = false,
  block = false,
  shape = 'default',
  size = 'md',
  icon,
  leftIcon,
  rightIcon,
  loading = false,
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isNativeType = type === 'button' || type === 'submit' || type === 'reset'
  const nativeType: NativeButtonType = htmlType ?? (isNativeType ? type : 'button')
  const visualType = isNativeType ? undefined : type
  const isLegacySecondary = !visualType && variant === 'secondary' && !danger && !ghost

  const resolvedSize = (
    {
      sm: 'small',
      md: 'middle',
      lg: 'large',
      small: 'small',
      middle: 'middle',
      large: 'large',
    } as const
  )[size]

  const mappedType: ButtonType = visualType
    ? visualType
    : variant === 'secondary'
      ? 'default'
      : variant === 'ghost'
        ? 'text'
        : 'primary'

  const isDanger = danger || variant === 'danger'
  const isLoadingResolved = loading || isLoading
  const startIcon = icon ?? leftIcon

  const typeClass = {
    primary:
      'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 active:shadow-inner',
    default:
      'border border-slate-300 bg-white text-slate-700 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:border-slate-400 hover:bg-slate-50 hover:text-slate-800 active:border-slate-500 active:bg-slate-100 active:text-slate-900 active:shadow-inner',
    dashed:
      'border border-dashed border-slate-300 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50 active:bg-slate-100 active:shadow-inner',
    text:
      'bg-transparent text-slate-700 hover:bg-slate-100 active:bg-slate-200 active:shadow-inner',
    link:
      'bg-transparent text-blue-600 hover:text-blue-700 active:text-blue-800',
  }[mappedType]

  const dangerClass = {
    primary:
      'bg-red-500 text-white hover:bg-red-600 active:bg-red-700 active:shadow-inner',
    default:
      'border border-red-300 bg-white text-red-500 hover:bg-red-50 hover:border-red-400 active:bg-red-100 active:border-red-500',
    dashed:
      'border border-dashed border-red-300 bg-white text-red-500 hover:bg-red-50 hover:border-red-400 active:bg-red-100 active:border-red-500',
    text: 'bg-transparent text-red-500 hover:bg-red-50 active:bg-red-100',
    link: 'bg-transparent text-red-500 hover:text-red-600 active:text-red-700',
  }[mappedType]

  const legacySecondaryClass =
    'border border-slate-200 bg-slate-100 text-slate-800 shadow-[0_1px_0_rgba(15,23,42,0.03)] hover:bg-slate-200 hover:border-slate-300 active:bg-slate-300 active:border-slate-400'

  const sizeClass = {
    small: 'h-8 px-3 text-sm',
    middle: 'h-9 px-4 text-sm',
    large: 'h-10 px-4 text-base',
  }[resolvedSize]

  const circleSizeClass = {
    small: 'h-8 w-8 text-sm',
    middle: 'h-9 w-9 text-sm',
    large: 'h-10 w-10 text-base',
  }[resolvedSize]

  const shapeClass =
    shape === 'circle'
      ? 'rounded-full p-0'
      : shape === 'round'
        ? 'rounded-full'
        : 'rounded-lg'

  const ghostAppearanceClass =
    ghost && mappedType !== 'link'
      ? isDanger
        ? 'border border-red-300 bg-transparent text-red-500 hover:bg-red-50 active:bg-red-100'
        : mappedType === 'primary'
          ? 'border border-blue-300 bg-transparent text-blue-600 hover:bg-blue-50 active:bg-blue-100'
          : 'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 active:bg-slate-100'
      : ''

  const appearanceClass =
    ghost && mappedType !== 'link'
      ? ghostAppearanceClass
      : isLegacySecondary
        ? legacySecondaryClass
      : isDanger
        ? dangerClass
        : typeClass

  return (
    <button
      type={nativeType}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 font-medium transition-transform transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 active:translate-y-px active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:translate-y-0 disabled:active:scale-100',
        appearanceClass,
        shape === 'circle' ? circleSizeClass : sizeClass,
        shapeClass,
        block && 'w-full',
        className,
      )}
      aria-busy={isLoadingResolved}
      disabled={disabled || isLoadingResolved}
      {...props}
    >
      {isLoadingResolved ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </span>
      ) : null}
      <span className={cn('inline-flex items-center gap-2', isLoadingResolved && 'opacity-0')}>
        {startIcon}
        {children}
        {rightIcon}
      </span>
    </button>
  )
}

export default Button
