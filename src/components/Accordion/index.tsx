import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { cn, getAnimationStyle } from '../utils'

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
  const animationStyle = getAnimationStyle()

  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white', className)} {...props}>
      {items.map((item) => {
        const open = openKey === item.key
        return (
          <div key={item.key} className="border-b border-slate-200 last:border-b-0">
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-slate-800"
              onClick={() => setOpenKey(open ? '' : item.key)}
              aria-expanded={open}
              type="button"
            >
              {item.title}
              <span
                className={cn(
                  'inline-flex text-xs text-slate-500 transition-transform',
                  open ? 'rotate-180' : 'rotate-0',
                )}
                style={animationStyle}
              >
                <FaChevronDown />
              </span>
            </button>
            <div
              aria-hidden={!open}
              className="grid transition-[grid-template-rows,opacity]"
              style={{
                ...animationStyle,
                gridTemplateRows: open ? '1fr' : '0fr',
                opacity: open ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 text-sm text-slate-600">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
