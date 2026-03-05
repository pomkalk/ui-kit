import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name

  return (
    <label className={cn('inline-flex items-center gap-2 text-sm text-slate-700', className)}>
      <input
        id={inputId}
        type="checkbox"
        className="h-4 w-4 rounded border-slate-300 text-blue-500 focus:ring-blue-300"
        {...props}
      />
      {label ? <span>{label}</span> : null}
    </label>
  )
}

export default Checkbox
