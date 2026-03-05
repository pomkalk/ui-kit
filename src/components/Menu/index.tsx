import type { HTMLAttributes, ReactNode } from 'react'
import { MenuItem } from '../MenuItem'
import { cn } from '../utils'

export interface MenuListItem {
  key: string
  label: ReactNode
  icon?: ReactNode
  active?: boolean
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export interface MenuGroup {
  key: string
  title: ReactNode
  items: MenuListItem[]
}

export interface MenuProps extends Omit<HTMLAttributes<HTMLUListElement>, 'onSelect'> {
  items?: MenuListItem[]
  groups?: MenuGroup[]
  activeKey?: string
  onItemSelect?: (key: string) => void
}

function renderItem(
  item: MenuListItem,
  activeKey: string | undefined,
  onItemSelect: ((key: string) => void) | undefined,
) {
  return (
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
  )
}

export function Menu({
  items,
  groups,
  activeKey,
  onItemSelect,
  className,
  children,
  ...props
}: MenuProps) {
  return (
    <ul
      className={cn('flex list-none flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2', className)}
      {...props}
    >
      {groups?.map((group) => (
        <li key={group.key} className="list-none">
          <div className="px-2 py-1 text-xs uppercase tracking-wide text-slate-400">
            {group.title}
          </div>
          <ul className="mt-1 space-y-1">
            {group.items.map((item) => renderItem(item, activeKey, onItemSelect))}
          </ul>
        </li>
      ))}

      {items?.map((item) => renderItem(item, activeKey, onItemSelect))}

      {!groups && !items ? children : null}
    </ul>
  )
}

export default Menu
