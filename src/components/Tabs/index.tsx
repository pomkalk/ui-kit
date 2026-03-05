import type { HTMLAttributes } from 'react'
import { Tab } from '../Tab'
import { cn } from '../utils'

export interface TabsItem {
  key: string
  label: string
}

export interface TabsProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabsItem[]
  activeKey: string
  onValueChange: (key: string) => void
}

export function Tabs({
  items,
  activeKey,
  onValueChange,
  className,
  ...props
}: TabsProps) {
  return (
    <div className={cn('inline-flex rounded-xl bg-white p-1', className)} role="tablist" {...props}>
      {items.map((item) => (
        <Tab
          key={item.key}
          active={item.key === activeKey}
          onClick={() => onValueChange(item.key)}
        >
          {item.label}
        </Tab>
      ))}
    </div>
  )
}

export default Tabs
