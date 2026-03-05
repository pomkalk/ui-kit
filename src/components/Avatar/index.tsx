import type { HTMLAttributes } from 'react'
import { Image } from '../Image'
import { cn } from '../utils'

type AvatarSize = 'sm' | 'md' | 'lg'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  initials?: string
  size?: AvatarSize
}

export function Avatar({
  src,
  alt = 'Avatar',
  initials = '?',
  size = 'md',
  className,
  ...props
}: AvatarProps) {
  const sizeClass = {
    sm: 'h-6 w-6 text-xs',
    md: 'h-8 w-8 text-sm',
    lg: 'h-10 w-10 text-base',
  }[size]

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-200 text-slate-700',
        sizeClass,
        className,
      )}
      {...props}
    >
      {src ? <Image alt={alt} className="h-full w-full" src={src} /> : initials}
    </div>
  )
}

export default Avatar
