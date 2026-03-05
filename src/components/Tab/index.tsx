import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export function Tab({ active = false, className, ...props }: TabProps) {
  return (
    <button
      className={cn(
        'rounded-lg px-4 py-2 text-sm transition',
        active
          ? 'bg-blue-50 font-medium text-blue-700'
          : 'text-slate-600 hover:bg-slate-100',
        className,
      )}
      role="tab"
      type="button"
      {...props}
    />
  )
}

export default Tab
