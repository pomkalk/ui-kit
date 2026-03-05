import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export type SkeletonProps = HTMLAttributes<HTMLDivElement>

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded bg-slate-200', className)} {...props} />
}

export default Skeleton
