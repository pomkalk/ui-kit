import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../utils'

export interface AccordionItem {
  key: string
  title: ReactNode
  content: ReactNode
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
  defaultOpenKey?: string
}

export function Accordion({
  items,
  defaultOpenKey,
  className,
  ...props
}: AccordionProps) {
  const [openKey, setOpenKey] = useState(defaultOpenKey ?? items[0]?.key)

  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white', className)} {...props}>
      {items.map((item) => {
        const open = openKey === item.key
        return (
          <div key={item.key} className="border-b border-slate-200 last:border-b-0">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-800"
              onClick={() => setOpenKey(open ? '' : item.key)}
              type="button"
            >
              {item.title}
              <span>{open ? '-' : '+'}</span>
            </button>
            {open ? <div className="px-4 pb-4 text-sm text-slate-600">{item.content}</div> : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
