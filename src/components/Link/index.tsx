import type { AnchorHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  underline?: boolean
}

export function Link({ underline = false, className, ...props }: LinkProps) {
  return (
    <a
      className={cn(
        'text-blue-600 transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300',
        underline && 'underline underline-offset-2',
        className,
      )}
      {...props}
    />
  )
}

export default Link
