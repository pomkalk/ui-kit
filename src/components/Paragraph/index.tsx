import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>

export function Paragraph({ className, ...props }: ParagraphProps) {
  return <p className={cn('text-sm leading-6 text-slate-700', className)} {...props} />
}

export default Paragraph
