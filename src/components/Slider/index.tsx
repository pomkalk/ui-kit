import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils'

export type SliderProps = InputHTMLAttributes<HTMLInputElement>

export function Slider({ className, ...props }: SliderProps) {
  return (
    <input
      type="range"
      className={cn('h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200', className)}
      {...props}
    />
  )
}

export default Slider
