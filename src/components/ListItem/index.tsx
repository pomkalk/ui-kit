import type { LiHTMLAttributes } from 'react'
import { cn } from '../utils'

export type ListItemProps = LiHTMLAttributes<HTMLLIElement>

export function ListItem({ className, ...props }: ListItemProps) {
  return (
    <li
      className={cn('rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700', className)}
      {...props}
    />
  )
}

export default ListItem
