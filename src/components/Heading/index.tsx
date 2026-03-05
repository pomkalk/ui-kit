import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
}

export function Heading({
  level = 2,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const
  const sizeClass =
    level === 1
      ? 'text-3xl'
      : level === 2
        ? 'text-2xl'
        : level === 3
          ? 'text-xl'
          : 'text-lg'

  return (
    <Tag className={cn('font-semibold text-slate-900', sizeClass, className)} {...props}>
      {children}
    </Tag>
  )
}

export default Heading
