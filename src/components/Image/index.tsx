import type { ImgHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fit?: 'cover' | 'contain' | 'fill'
}

export function Image({ fit = 'cover', className, ...props }: ImageProps) {
  const fitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
  }[fit]

  return <img className={cn(fitClass, className)} {...props} />
}

export default Image
