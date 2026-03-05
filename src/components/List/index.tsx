import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export type ListProps = HTMLAttributes<HTMLUListElement>

export function List({ className, ...props }: ListProps) {
  return <ul className={cn('list-none space-y-2', className)} {...props} />
}

export default List
