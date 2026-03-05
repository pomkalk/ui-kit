import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

type TextTone = 'primary' | 'secondary' | 'muted'

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  tone?: TextTone
}

export function Text({ tone = 'primary', className, ...props }: TextProps) {
  const toneClass = {
    primary: 'text-slate-900',
    secondary: 'text-slate-700',
    muted: 'text-slate-500',
  }[tone]

  return <p className={cn('text-sm leading-6', toneClass, className)} {...props} />
}

export default Text
