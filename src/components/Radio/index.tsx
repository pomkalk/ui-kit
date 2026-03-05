import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Radio({ label, className, ...props }: RadioProps) {
  return (
    <label className={cn('inline-flex items-center gap-2 text-sm text-slate-700', className)}>
      <input
        type="radio"
        className="h-4 w-4 border-slate-300 text-blue-500 focus:ring-blue-300"
        {...props}
      />
      {label ? <span>{label}</span> : null}
    </label>
  )
}

export default Radio
