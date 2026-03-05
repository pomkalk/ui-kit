import type { HTMLAttributes, ReactNode } from 'react'
import { Overlay } from '../Overlay'
import { Portal } from '../Portal'
import { cn, getAnimationStyle, useAnimatedPresence } from '../utils'

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  open: boolean
  onClose: () => void
  title?: ReactNode
  footer?: ReactNode
}

export function Modal({
  open,
  onClose,
  title,
  footer,
  className,
  children,
  ...props
}: ModalProps) {
  const { isMounted, isVisible } = useAnimatedPresence(open)
  const animationStyle = getAnimationStyle()

  if (!isMounted) return null

  return (
    <Portal>
      <Overlay
        className={cn(
          'transition-opacity',
          isVisible ? 'opacity-100' : 'opacity-0',
        )}
        style={animationStyle}
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={cn(
            'w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all',
            isVisible
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-2 scale-[0.98] opacity-0',
            className,
          )}
          style={animationStyle}
          {...props}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-lg font-semibold text-slate-900">{title}</div>
            <button className="text-slate-500 hover:text-slate-700" onClick={onClose} type="button">
              x
            </button>
          </div>
          {children}
          {footer ? <div className="mt-4 flex items-center justify-end gap-2">{footer}</div> : null}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
