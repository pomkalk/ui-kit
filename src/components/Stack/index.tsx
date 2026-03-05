import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

type StackDirection = 'vertical' | 'horizontal'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: StackDirection
  gapClassName?: string
}

export function Stack({
  direction = 'vertical',
  gapClassName = 'gap-3',
  className,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        gapClassName,
        className,
      )}
      {...props}
    />
  )
}

export default Stack
