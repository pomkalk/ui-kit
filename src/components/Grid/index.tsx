import type { CSSProperties, HTMLAttributes } from 'react'
import { cn } from '../utils'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: number
  gap?: number
}

export function Grid({ columns = 1, gap = 16, style, className, ...props }: GridProps) {
  const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap,
    ...style,
  }
  return <div className={cn(className)} style={gridStyle} {...props} />
}

export default Grid
