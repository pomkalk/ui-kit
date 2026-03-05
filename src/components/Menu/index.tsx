import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export type MenuProps = HTMLAttributes<HTMLUListElement>

export function Menu({ className, ...props }: MenuProps) {
  return (
    <ul
      className={cn('flex list-none flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2', className)}
      {...props}
    />
  )
}

export default Menu
