import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
  dismissOnClick?: boolean
}

export function Overlay({
  onClose,
  dismissOnClick = true,
  className,
  onClick,
  ...props
}: OverlayProps) {
  return (
    <div
      className={cn('fixed inset-0 bg-slate-900/35', onClose && 'cursor-pointer', className)}
      onClick={(event) => {
        onClick?.(event)
        if (dismissOnClick) onClose?.()
      }}
      {...props}
    />
  )
}

export default Overlay
