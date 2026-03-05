import type { HTMLAttributes, ReactNode } from 'react'
import { Avatar } from '../Avatar'
import { cn } from '../utils'

export interface SidebarProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  name: ReactNode
  subtitle?: ReactNode
  avatarSrc?: string
}

export function SidebarProfileCard({
  name,
  subtitle,
  avatarSrc,
  className,
  ...props
}: SidebarProfileCardProps) {
  return (
    <div className={cn('flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2', className)} {...props}>
      <Avatar src={avatarSrc} />
      <div className="min-w-0">
        <div className="truncate text-sm font-medium text-slate-800">{name}</div>
        {subtitle ? <div className="truncate text-xs text-slate-500">{subtitle}</div> : null}
      </div>
    </div>
  )
}

export default SidebarProfileCard
