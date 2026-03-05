import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface MenuItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  active?: boolean
}

export function MenuItem({
  icon,
  active = false,
  className,
  children,
  ...props
}: MenuItemProps) {
  return (
    <li>
      <button
        className={cn(
          'flex h-9 w-full items-center gap-2 rounded-lg px-3 text-left text-sm text-slate-700 transition hover:bg-slate-100',
          active && 'bg-blue-50 text-blue-700',
          className,
        )}
        type="button"
        {...props}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  )
}

export default MenuItem
