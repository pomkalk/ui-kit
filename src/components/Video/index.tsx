import type { VideoHTMLAttributes } from 'react'
import { cn } from '../utils'

export type VideoProps = VideoHTMLAttributes<HTMLVideoElement>

export function Video({ className, ...props }: VideoProps) {
  return <video className={cn('h-auto w-full rounded-xl', className)} controls {...props} />
}

export default Video
