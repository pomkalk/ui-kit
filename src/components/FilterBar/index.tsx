import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface FilterBarProps extends HTMLAttributes<HTMLDivElement> {
  start?: ReactNode
  middle?: ReactNode
  end?: ReactNode
}

export function FilterBar({
  start,
  middle,
  end,
  className,
  ...props
}: FilterBarProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)} {...props}>
      {start ? <div className="flex items-center gap-2">{start}</div> : null}
      {middle ? <div className="flex items-center gap-2">{middle}</div> : null}
      {end ? <div className="ml-auto flex items-center gap-2">{end}</div> : null}
    </div>
  )
}

export default FilterBar
