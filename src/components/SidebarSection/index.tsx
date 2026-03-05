import type { HTMLAttributes, ReactNode } from 'react'
import { MenuItem, type MenuItemProps } from '../MenuItem'
import { cn } from '../utils'

export interface SidebarSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  items?: Array<
    Pick<MenuItemProps, 'icon' | 'active' | 'disabled' | 'className'> & {
      key: string
      label: ReactNode
      onClick?: () => void
    }
  >
  activeKey?: string
  onItemSelect?: (key: string) => void
}

export function SidebarSection({
  title,
  items,
  activeKey,
  onItemSelect,
  className,
  children,
  ...props
}: SidebarSectionProps) {
  return (
    <section className={cn('space-y-2', className)} {...props}>
      <div className="px-2 text-xs uppercase tracking-wide text-slate-400">{title}</div>
      <ul className="m-0 list-none space-y-1 p-0">
        {items?.map((item) => (
          <MenuItem
            key={item.key}
            active={item.active ?? item.key === activeKey}
            className={item.className}
            disabled={item.disabled}
            icon={item.icon}
            onClick={() => {
              item.onClick?.()
              onItemSelect?.(item.key)
            }}
          >
            {item.label}
          </MenuItem>
        ))}
        {!items ? children : null}
      </ul>
    </section>
  )
}

export default SidebarSection
