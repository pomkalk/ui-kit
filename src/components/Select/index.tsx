import type { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface SelectOption extends OptionHTMLAttributes<HTMLOptionElement> {
  label: string
  value: string
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  isInvalid?: boolean
}

export function Select({
  options,
  isInvalid = false,
  className,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        'h-9 w-full rounded-lg border bg-white px-3 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-blue-300',
        isInvalid ? 'border-red-500' : 'border-slate-200',
        className,
      )}
      {...props}
    >
      {options.map(({ label, value, ...optionProps }) => (
        <option key={value} value={value} {...optionProps}>
          {label}
        </option>
      ))}
    </select>
  )
}

export default Select
