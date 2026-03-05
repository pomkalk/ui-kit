import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean
}

export function Input({ isInvalid = false, className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'h-9 w-full rounded-lg border bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-300',
        isInvalid ? 'border-red-500' : 'border-slate-200',
        className,
      )}
      {...props}
    />
  )
}

export default Input
