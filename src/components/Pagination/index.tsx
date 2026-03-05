import type { HTMLAttributes } from 'react'
import { Button } from '../Button'
import { cn } from '../utils'

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  return (
    <div className={cn('flex items-center gap-2', className)} {...props}>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        Prev
      </Button>
      <span className="text-sm text-slate-600">
        {page} / {totalPages}
      </span>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </Button>
    </div>
  )
}

export default Pagination
