import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface SidebarSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
}

export function SidebarSection({
  title,
  className,
  children,
  ...props
}: SidebarSectionProps) {
  return (
    <section className={cn('space-y-2', className)} {...props}>
      <div className="px-2 text-xs uppercase tracking-wide text-slate-400">{title}</div>
      <div className="space-y-1">{children}</div>
    </section>
  )
}

export default SidebarSection
