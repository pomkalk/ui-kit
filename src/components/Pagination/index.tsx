import type { HTMLAttributes } from 'react'
import { Button } from '../Button'
import { cn } from '../utils'

export interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  variant?: 'simple' | 'advanced'
  showPageNumbers?: boolean
  maxVisiblePages?: number
  totalItems?: number
  pageSize?: number
  pageSizeOptions?: number[]
  onPageSizeChange?: (pageSize: number) => void
  labels?: {
    prev?: string
    next?: string
    page?: string
    of?: string
    itemsPerPage?: string
    totalItems?: string
  }
}

type PageToken = number | 'ellipsis'

function clampPage(page: number, totalPages: number): number {
  return Math.min(Math.max(1, page), Math.max(1, totalPages))
}

function buildPageTokens(
  page: number,
  totalPages: number,
  maxVisiblePages: number,
): PageToken[] {
  if (totalPages <= maxVisiblePages) {
    return Array.from({ length: totalPages }, (_, index) => index + 1)
  }

  const tokens: PageToken[] = [1]
  const innerWindow = Math.max(1, maxVisiblePages - 2)
  const half = Math.floor(innerWindow / 2)
  let start = Math.max(2, page - half)
  let end = Math.min(totalPages - 1, start + innerWindow - 1)

  if (end - start + 1 < innerWindow) {
    start = Math.max(2, end - innerWindow + 1)
  }

  if (start > 2) tokens.push('ellipsis')
  for (let current = start; current <= end; current += 1) {
    tokens.push(current)
  }
  if (end < totalPages - 1) tokens.push('ellipsis')
  tokens.push(totalPages)

  return tokens
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  variant = 'simple',
  showPageNumbers = false,
  maxVisiblePages = 7,
  totalItems,
  pageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  labels,
  className,
  ...props
}: PaginationProps) {
  const safePage = clampPage(page, totalPages)
  const prevLabel = labels?.prev ?? 'Prev'
  const nextLabel = labels?.next ?? 'Next'
  const pageLabel = labels?.page ?? 'Page'
  const ofLabel = labels?.of ?? 'of'
  const itemsPerPageLabel = labels?.itemsPerPage ?? 'Items per page'
  const totalItemsLabel = labels?.totalItems ?? 'Total'
  const pageTokens = buildPageTokens(safePage, totalPages, maxVisiblePages)
  const isAdvanced = variant === 'advanced'

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white p-2',
        className,
      )}
      {...props}
    >
      <Button
        size="sm"
        variant="ghost"
        onClick={() => onPageChange(safePage - 1)}
        disabled={safePage <= 1}
      >
        {prevLabel}
      </Button>

      {showPageNumbers ? (
        <div className="flex items-center gap-1">
          {pageTokens.map((token, index) =>
            token === 'ellipsis' ? (
              <span key={`ellipsis-${index}`} className="px-2 text-sm text-slate-400">
                ...
              </span>
            ) : (
              <Button
                key={token}
                size="sm"
                variant={token === safePage ? 'primary' : 'ghost'}
                onClick={() => onPageChange(token)}
              >
                {token}
              </Button>
            ),
          )}
        </div>
      ) : (
        <span className="text-sm text-slate-600">
          {pageLabel} {safePage} {ofLabel} {totalPages}
        </span>
      )}

      <Button
        size="sm"
        variant="ghost"
        onClick={() => onPageChange(safePage + 1)}
        disabled={safePage >= totalPages}
      >
        {nextLabel}
      </Button>

      {isAdvanced ? (
        <div className="ml-auto flex items-center gap-2 text-sm text-slate-600">
          {totalItems !== undefined ? (
            <span>
              {totalItemsLabel}: {totalItems}
            </span>
          ) : null}

          <label className="inline-flex items-center gap-2">
            <span>{itemsPerPageLabel}</span>
            <select
              className="h-8 rounded-lg border border-slate-200 bg-white px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              onChange={(event) => onPageSizeChange?.(Number(event.target.value))}
              value={pageSize}
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        </div>
      ) : null}
    </div>
  )
}

export default Pagination
