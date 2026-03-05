import {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { cn, getAnimationStyle, useAnimatedPresence } from '../utils'

export type DropdownPlacement =
  | 'bottomLeft'
  | 'bottom'
  | 'bottomRight'
  | 'topLeft'
  | 'top'
  | 'topRight'

export type DropdownTrigger = 'click' | 'hover'

export interface DropdownItem {
  key: string
  label: ReactNode
  icon?: ReactNode
  disabled?: boolean
  danger?: boolean
  onClick?: () => void
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  items: DropdownItem[]
  children: ReactNode
  placement?: DropdownPlacement
  trigger?: DropdownTrigger
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  onSelect?: (item: DropdownItem) => void
  menuClassName?: string
}

function getPlacementClasses(placement: DropdownPlacement): string {
  if (placement === 'bottomLeft') return 'top-full left-0 mt-2 origin-top-left'
  if (placement === 'bottom') return 'top-full left-1/2 mt-2 -translate-x-1/2 origin-top'
  if (placement === 'bottomRight') return 'top-full right-0 mt-2 origin-top-right'
  if (placement === 'topLeft') return 'bottom-full left-0 mb-2 origin-bottom-left'
  if (placement === 'top') return 'bottom-full left-1/2 mb-2 -translate-x-1/2 origin-bottom'
  return 'bottom-full right-0 mb-2 origin-bottom-right'
}

export function Dropdown({
  items,
  children,
  placement = 'bottomLeft',
  trigger = 'hover',
  open,
  defaultOpen = false,
  onOpenChange,
  onSelect,
  className,
  menuClassName,
  ...props
}: DropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<number | null>(null)
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen
  const { isMounted: isMenuMounted, isVisible: isMenuVisible } =
    useAnimatedPresence(isOpen)
  const animationStyle = getAnimationStyle()

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  useEffect(() => {
    return () => clearCloseTimeout()
  }, [])

  return (
    <div
      className={cn('relative inline-flex', className)}
      onMouseEnter={() => {
        if (trigger !== 'hover') return
        clearCloseTimeout()
        setOpen(true)
      }}
      onMouseLeave={() => {
        if (trigger !== 'hover') return
        clearCloseTimeout()
        closeTimeoutRef.current = window.setTimeout(() => setOpen(false), 80)
      }}
      ref={rootRef}
      {...props}
    >
      <span
        className="inline-flex"
        onClick={() => {
          if (trigger === 'click') setOpen(!isOpen)
        }}
      >
        {children}
      </span>

      {isMenuMounted ? (
        <div
          className={cn(
            'absolute z-30 min-w-56 rounded-2xl border border-slate-200 bg-white p-1 shadow-lg transition-[opacity,transform] will-change-[opacity,transform]',
            getPlacementClasses(placement),
            isMenuVisible ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-0',
            !isMenuVisible && 'pointer-events-none',
            menuClassName,
          )}
          role="menu"
          style={animationStyle}
        >
          {items.map((item) => (
            <button
              key={item.key}
              className={cn(
                'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition',
                item.disabled
                  ? 'cursor-not-allowed text-slate-300'
                  : item.danger
                    ? 'text-red-500 hover:bg-red-50'
                    : 'text-slate-800 hover:bg-slate-50',
              )}
              disabled={item.disabled}
              onClick={() => {
                item.onClick?.()
                onSelect?.(item)
                if (!item.disabled) setOpen(false)
              }}
              role="menuitem"
              type="button"
            >
              {item.icon ? <span className="inline-flex text-slate-400">{item.icon}</span> : null}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
