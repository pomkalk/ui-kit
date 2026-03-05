import type { HTMLAttributes, ReactNode } from 'react'
import { Overlay } from '../Overlay'
import { Portal } from '../Portal'
import { cn } from '../utils'

type DrawerSide = 'left' | 'right'

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean
  onClose: () => void
  side?: DrawerSide
  title?: ReactNode
}

export function Drawer({
  open,
  onClose,
  side = 'right',
  title,
  className,
  children,
  ...props
}: DrawerProps) {
  if (!open) return null

  return (
    <Portal>
      <Overlay onClick={onClose} />
      <div className={cn('fixed inset-y-0 z-50 w-full max-w-md', side === 'right' ? 'right-0' : 'left-0')}>
        <div
          className={cn('h-full border-slate-200 bg-white p-5 shadow-md', side === 'right' ? 'border-l' : 'border-r', className)}
          {...props}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-lg font-semibold text-slate-900">{title}</div>
            <button className="text-slate-500 hover:text-slate-700" onClick={onClose} type="button">
              x
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Drawer
