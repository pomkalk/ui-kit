import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  glyph?: ReactNode
  size?: number
}

export function Icon({ glyph = '•', size = 16, className, ...props }: IconProps) {
  return (
    <span
      className={cn('inline-flex items-center justify-center text-current', className)}
      style={{ width: size, height: size, fontSize: size * 0.875 }}
      {...props}
    >
      {glyph}
    </span>
  )
}

export default Icon
