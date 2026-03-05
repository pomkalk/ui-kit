import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface AttachmentPillProps extends HTMLAttributes<HTMLDivElement> {
  type?: ReactNode
  name: ReactNode
  meta?: ReactNode
}

export function AttachmentPill({
  type,
  name,
  meta,
  className,
  ...props
}: AttachmentPillProps) {
  return (
    <div className={cn('inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2', className)} {...props}>
      {type ? <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{type}</span> : null}
      <div className="min-w-0">
        <div className="truncate text-sm text-slate-800">{name}</div>
        {meta ? <div className="text-xs text-slate-500">{meta}</div> : null}
      </div>
    </div>
  )
}

export default AttachmentPill
