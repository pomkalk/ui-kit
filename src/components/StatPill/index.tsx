import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface StatPillProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode
  value: ReactNode
}

export function StatPill({ label, value, className, ...props }: StatPillProps) {
  return (
    <div className={cn('inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600', className)} {...props}>
      <span>{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  )
}

export default StatPill
