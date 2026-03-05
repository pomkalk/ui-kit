import type { TextareaHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isInvalid?: boolean
}

export function Textarea({
  isInvalid = false,
  className,
  ...props
}: TextareaProps) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-300',
        isInvalid ? 'border-red-500' : 'border-slate-200',
        className,
      )}
      {...props}
    />
  )
}

export default Textarea
