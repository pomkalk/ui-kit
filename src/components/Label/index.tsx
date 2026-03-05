import type { LabelHTMLAttributes } from 'react'
import { cn } from '../utils'

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label({ className, ...props }: LabelProps) {
  return <label className={cn('text-sm font-medium text-slate-700', className)} {...props} />
}

export default Label
