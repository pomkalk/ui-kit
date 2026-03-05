import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Toggle({ label, className, checked, ...props }: ToggleProps) {
  return (
    <label className={cn('inline-flex items-center gap-2', className)}>
      <span className="relative inline-flex h-6 w-11 items-center">
        <input type="checkbox" className="peer sr-only" checked={checked} {...props} />
        <span className="absolute inset-0 rounded-full bg-slate-300 transition peer-checked:bg-blue-500" />
        <span className="absolute left-0.5 h-5 w-5 rounded-full bg-white transition peer-checked:translate-x-5" />
      </span>
      {label ? <span className="text-sm text-slate-700">{label}</span> : null}
    </label>
  )
}

export default Toggle
