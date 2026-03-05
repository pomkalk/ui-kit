import type { HTMLAttributes, ReactNode } from 'react'
import { Overlay } from '../Overlay'
import { Portal } from '../Portal'
import { cn } from '../utils'

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean
  onClose: () => void
  title?: ReactNode
}

export function Modal({
  open,
  onClose,
  title,
  className,
  children,
  ...props
}: ModalProps) {
  if (!open) return null

  return (
    <Portal>
      <Overlay onClick={onClose} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={cn('w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-md', className)}
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

export default Modal
