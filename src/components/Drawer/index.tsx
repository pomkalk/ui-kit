import type { HTMLAttributes, ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { FaXmark } from 'react-icons/fa6'
import { Overlay } from '../Overlay'
import { Portal } from '../Portal'
import { cn, getAnimationStyle, useAnimatedPresence } from '../utils'

type DrawerSide = 'left' | 'right' | 'top' | 'bottom'

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
  const { t } = useTranslation()
  const { isMounted, isVisible } = useAnimatedPresence(open)
  const animationStyle = getAnimationStyle()

  if (!isMounted) return null

  const wrapperClass =
    side === 'right'
      ? 'fixed inset-y-0 right-0 z-50 w-full max-w-md'
      : side === 'left'
        ? 'fixed inset-y-0 left-0 z-50 w-full max-w-md'
        : side === 'top'
          ? 'fixed inset-x-0 top-0 z-50 w-full'
          : 'fixed inset-x-0 bottom-0 z-50 w-full'

  const panelBorderClass =
    side === 'right'
      ? 'h-full w-full border-l'
      : side === 'left'
        ? 'h-full w-full border-r'
        : side === 'top'
          ? 'w-full border-b'
          : 'w-full border-t'

  const panelMotionClass =
    side === 'right'
      ? isVisible
        ? 'translate-x-0 opacity-100'
        : 'translate-x-full opacity-0'
      : side === 'left'
        ? isVisible
          ? 'translate-x-0 opacity-100'
          : '-translate-x-full opacity-0'
        : side === 'top'
          ? isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
          : isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'

  const panelSizeClass =
    side === 'left' || side === 'right' ? 'h-full max-h-none' : 'max-h-[80vh]'

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
      <div className={cn(wrapperClass)}>
        <div
          className={cn(
            'border-slate-200 bg-white p-5 shadow-md transition-all',
            panelSizeClass,
            panelBorderClass,
            panelMotionClass,
            className,
          )}
          style={animationStyle}
          {...props}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-lg font-semibold text-slate-900">{title}</div>
            <button
              aria-label={t('drawer_closeAria')}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              onClick={onClose}
              type="button"
            >
              <FaXmark />
            </button>
          </div>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Drawer
