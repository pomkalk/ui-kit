import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  ratio?: number
}

export function AspectRatio({
  ratio = 16 / 9,
  className,
  children,
  ...props
}: AspectRatioProps) {
  return (
    <div className={cn('relative w-full overflow-hidden', className)} style={{ aspectRatio: String(ratio) }} {...props}>
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}

export default AspectRatio
