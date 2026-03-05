import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export type OverlayProps = HTMLAttributes<HTMLDivElement>

export function Overlay({ className, ...props }: OverlayProps) {
  return <div className={cn('fixed inset-0 bg-slate-900/35', className)} {...props} />
}

export default Overlay
