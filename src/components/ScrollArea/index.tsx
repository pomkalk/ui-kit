import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export interface ScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  maxHeight?: number
}

export function ScrollArea({
  maxHeight = 320,
  style,
  className,
  ...props
}: ScrollAreaProps) {
  return (
    <div
      className={cn('overflow-auto', className)}
      style={{ maxHeight, ...style }}
      {...props}
    />
  )
}

export default ScrollArea
