import { useEffect, useMemo, useState, type HTMLAttributes, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import { Select } from '../Select'
import { cn } from '../utils'

export interface PaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  current?: number
  defaultCurrent?: number
  total?: number
  pageSize?: number
  defaultPageSize?: number
  onChange?: (page: number, pageSize: number) => void
  showSizeChanger?: boolean
  showQuickJumper?: boolean
  hideOnSinglePage?: boolean
  disabled?: boolean
  bordered?: boolean
  showTotal?: (total: number, range: [number, number]) => ReactNode
  size?: 'small' | 'middle'
  variant?: 'simple' | 'advanced'
  maxVisiblePages?: number
  pageSizeOptions?: number[]
  // Legacy API (backward compatibility)
  page?: number
  totalPages?: number
  onPageChange?: (page: number) => void
  totalItems?: number
  showPageNumbers?: boolean
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
  current,
  defaultCurrent = 1,
  total,
  pageSize,
  defaultPageSize = 10,
  onChange,
  showSizeChanger,
  showQuickJumper = false,
  hideOnSinglePage = false,
  disabled = false,
  bordered = true,
  showTotal,
  size = 'middle',
  variant = 'simple',
  showPageNumbers,
  maxVisiblePages = 7,
  page,
  totalPages,
  onPageChange,
  totalItems,
  pageSizeOptions = [10, 20, 50, 100],
  onPageSizeChange,
  labels,
  className,
  ...props
}: PaginationProps) {
  const { t } = useTranslation()
  const legacyTotalPages = totalPages ?? 1
  const initialPageSize = pageSize ?? defaultPageSize
  const resolvedTotalItems = total ?? totalItems ?? legacyTotalPages * initialPageSize

  const [internalPage, setInternalPage] = useState(page ?? current ?? defaultCurrent)
  const [internalPageSize, setInternalPageSize] = useState(initialPageSize)
  const isControlledPage = page !== undefined || current !== undefined
  const isControlledPageSize = pageSize !== undefined
  const resolvedPageSize = isControlledPageSize ? pageSize : internalPageSize

  const computedTotalPages =
    total !== undefined || totalItems !== undefined
      ? Math.max(1, Math.ceil(resolvedTotalItems / Math.max(1, resolvedPageSize)))
      : legacyTotalPages

  const resolvedCurrent = isControlledPage ? (page ?? current ?? 1) : internalPage
  const safePage = clampPage(resolvedCurrent, computedTotalPages)
  const shouldShowPageNumbers = showPageNumbers ?? variant !== 'simple'
  const isAdvanced = variant === 'advanced' || showSizeChanger || showQuickJumper || !!showTotal

  useEffect(() => {
    if (isControlledPage) return
    setInternalPage((prev) => clampPage(prev, computedTotalPages))
  }, [isControlledPage, computedTotalPages])

  const prevLabel = labels?.prev ?? t('pagination_prev')
  const nextLabel = labels?.next ?? t('pagination_next')
  const pageLabel = labels?.page ?? t('pagination_page')
  const ofLabel = labels?.of ?? t('pagination_of')
  const itemsPerPageLabel = labels?.itemsPerPage ?? t('pagination_itemsPerPage')
  const totalItemsLabel = labels?.totalItems ?? t('pagination_total')
  const pageTokens = useMemo(
    () => buildPageTokens(safePage, computedTotalPages, maxVisiblePages),
    [safePage, computedTotalPages, maxVisiblePages],
  )
  const pageSizeChangerVisible = showSizeChanger ?? variant === 'advanced'

  const emitPageChange = (nextPage: number, nextPageSize = resolvedPageSize) => {
    const normalizedPage = clampPage(nextPage, computedTotalPages)
    if (!isControlledPage) setInternalPage(normalizedPage)
    onPageChange?.(normalizedPage)
    onChange?.(normalizedPage, nextPageSize)
  }

  const emitPageSizeChange = (nextPageSize: number) => {
    const normalized = Math.max(1, nextPageSize)
    if (!isControlledPageSize) setInternalPageSize(normalized)
    if (!isControlledPage) setInternalPage(1)
    onPageSizeChange?.(normalized)
    onChange?.(1, normalized)
  }

  const start = resolvedTotalItems === 0 ? 0 : (safePage - 1) * resolvedPageSize + 1
  const end = Math.min(safePage * resolvedPageSize, resolvedTotalItems)

  if (hideOnSinglePage && computedTotalPages <= 1) return null

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2',
        bordered
          ? 'rounded-xl border border-slate-200 bg-white p-2'
          : 'rounded-none border-0 bg-transparent p-0',
        bordered && size === 'small' && 'p-1.5',
        disabled && 'pointer-events-none opacity-60',
        className,
      )}
      {...props}
    >
      <Button
        size={size === 'small' ? 'small' : 'middle'}
        variant="ghost"
        onClick={() => emitPageChange(safePage - 1)}
        disabled={safePage <= 1}
      >
        {prevLabel}
      </Button>

      {shouldShowPageNumbers ? (
        <div className="flex items-center gap-1">
          {pageTokens.map((token, index) =>
            token === 'ellipsis' ? (
              <span key={`ellipsis-${index}`} className="px-2 text-sm text-slate-400">
                ...
              </span>
            ) : (
              <Button
                key={token}
                size={size === 'small' ? 'small' : 'middle'}
                variant={token === safePage ? 'primary' : 'ghost'}
                onClick={() => emitPageChange(token)}
              >
                {token}
              </Button>
            ),
          )}
        </div>
      ) : (
        <span className="text-sm text-slate-600">
          {pageLabel} {safePage} {ofLabel} {computedTotalPages}
        </span>
      )}

      <Button
        size={size === 'small' ? 'small' : 'middle'}
        variant="ghost"
        onClick={() => emitPageChange(safePage + 1)}
        disabled={safePage >= computedTotalPages}
      >
        {nextLabel}
      </Button>

      {isAdvanced ? (
        <div className="ml-auto flex flex-wrap items-center justify-end gap-2 text-sm text-slate-600">
          {showTotal ? (
            <span className="whitespace-nowrap">{showTotal(resolvedTotalItems, [start, end])}</span>
          ) : resolvedTotalItems !== undefined ? (
            <span className="whitespace-nowrap">
              {totalItemsLabel}: {resolvedTotalItems}
            </span>
          ) : null}

          {pageSizeChangerVisible ? (
            <label className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap">
              <span className="whitespace-nowrap">{itemsPerPageLabel}</span>
              <Select
                className="w-24"
                onValueChange={(value) => emitPageSizeChange(Number(value))}
                options={pageSizeOptions.map((pageSizeOption) => ({
                  label: String(pageSizeOption),
                  value: String(pageSizeOption),
                }))}
                value={String(resolvedPageSize)}
              />
            </label>
          ) : null}

          {showQuickJumper ? (
            <label className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap">
              <span>{t('pagination_goTo')}</span>
              <input
                className="h-8 w-16 rounded-lg border border-slate-200 px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                min={1}
                max={computedTotalPages}
                onKeyDown={(event) => {
                  if (event.key !== 'Enter') return
                  const value = Number((event.target as HTMLInputElement).value)
                  if (!Number.isNaN(value)) emitPageChange(value)
                }}
                placeholder={String(safePage)}
                type="number"
              />
            </label>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default Pagination
