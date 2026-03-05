import type { HTMLAttributes } from 'react'
import { Link } from '../Link'
import { cn } from '../utils'

export interface BreadcrumbItem {
  key: string
  label: string
  href?: string
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
  separator?: string
}

export function Breadcrumb({
  items,
  separator = '/',
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav className={cn('text-sm text-slate-500', className)} {...props}>
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={item.key} className="flex items-center gap-2">
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {index < items.length - 1 ? <span>{separator}</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
