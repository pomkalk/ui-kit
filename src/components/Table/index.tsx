import { useEffect, useMemo, useState, type HTMLAttributes, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Pagination } from '../Pagination'
import { cn } from '../utils'

type TableCellAlign = 'left' | 'center' | 'right'
type TableSize = 'small' | 'middle' | 'large'

export interface TableColumn<T> {
  key?: keyof T & string
  dataIndex?: keyof T & string
  title?: ReactNode
  header?: ReactNode
  width?: number | string
  align?: TableCellAlign
  className?: string
  render?: (value: unknown, row: T, index: number) => ReactNode
}

export interface TablePaginationConfig {
  current?: number
  pageSize?: number
  total?: number
  showSizeChanger?: boolean
  pageSizeOptions?: number[]
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (page: number, pageSize: number) => void
}

export interface TableProps<T> extends HTMLAttributes<HTMLDivElement> {
  columns: Array<TableColumn<T>>
  dataSource?: T[]
  rows?: T[]
  rowKey?: keyof T & string | ((row: T, index: number) => string)
  header?: ReactNode
  footer?: ReactNode
  loading?: boolean
  bordered?: boolean
  size?: TableSize
  pagination?: boolean | TablePaginationConfig
  emptyText?: ReactNode
}

export function Table<T>({
  columns,
  dataSource,
  rows,
  rowKey,
  header,
  footer,
  loading = false,
  bordered = true,
  size = 'middle',
  pagination = false,
  emptyText,
  className,
  ...props
}: TableProps<T>) {
  const { t } = useTranslation()
  const resolvedEmptyText = emptyText ?? t('table_emptyText')
  const resolvedRows = dataSource ?? rows ?? []
  const paginationConfig = pagination && typeof pagination === 'object' ? pagination : undefined
  const paginationEnabled = Boolean(pagination)
  const totalRows = paginationConfig?.total ?? resolvedRows.length
  const pageSizeFromProps = paginationConfig?.pageSize
  const currentFromProps = paginationConfig?.current
  const isCurrentControlled =
    currentFromProps !== undefined && Boolean(paginationConfig?.onChange)
  const isPageSizeControlled =
    pageSizeFromProps !== undefined &&
    (Boolean(paginationConfig?.onChange) || Boolean(paginationConfig?.onShowSizeChange))

  const [internalCurrent, setInternalCurrent] = useState(currentFromProps ?? 1)
  const [internalPageSize, setInternalPageSize] = useState(pageSizeFromProps ?? 10)

  useEffect(() => {
    if (isCurrentControlled && currentFromProps !== undefined) setInternalCurrent(currentFromProps)
  }, [isCurrentControlled, currentFromProps])

  useEffect(() => {
    if (isPageSizeControlled && pageSizeFromProps !== undefined) setInternalPageSize(pageSizeFromProps)
  }, [isPageSizeControlled, pageSizeFromProps])

  const current = isCurrentControlled ? (currentFromProps ?? 1) : internalCurrent
  const pageSize = isPageSizeControlled ? (pageSizeFromProps ?? 10) : internalPageSize
  const totalPages = Math.max(1, Math.ceil(totalRows / Math.max(1, pageSize)))
  const safeCurrent = Math.min(Math.max(1, current), totalPages)

  const pagedRows = useMemo(() => {
    if (!paginationEnabled) return resolvedRows
    const start = (safeCurrent - 1) * pageSize
    const end = start + pageSize
    return resolvedRows.slice(start, end)
  }, [resolvedRows, paginationEnabled, safeCurrent, pageSize])

  const onPageChange = (nextPage: number) => {
    const safePage = Math.min(Math.max(1, nextPage), totalPages)
    if (!isCurrentControlled) setInternalCurrent(safePage)
    paginationConfig?.onChange?.(safePage, pageSize)
  }

  const onPageSizeChange = (nextPageSize: number) => {
    const normalized = Math.max(1, nextPageSize)
    if (!isPageSizeControlled) setInternalPageSize(normalized)
    if (!isCurrentControlled) setInternalCurrent(1)
    paginationConfig?.onShowSizeChange?.(1, normalized)
    paginationConfig?.onChange?.(1, normalized)
  }

  const cellSizeClass = {
    small: 'px-3 py-2 text-xs',
    middle: 'px-4 py-3 text-sm',
    large: 'px-5 py-4 text-sm',
  }[size]

  const headerSizeClass = {
    small: 'px-3 py-2 text-xs',
    middle: 'px-4 py-3 text-sm',
    large: 'px-5 py-4 text-sm',
  }[size]

  const alignClass = (align?: TableCellAlign) =>
    align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'

  const getRowKey = (row: T, index: number): string => {
    if (typeof rowKey === 'function') return rowKey(row, index)
    if (rowKey && row[rowKey] !== undefined && row[rowKey] !== null) return String(row[rowKey])
    return String(index)
  }

  const resolveColumnTitle = (column: TableColumn<T>): ReactNode =>
    column.title ?? column.header ?? (column.key ? String(column.key) : '')

  const resolveColumnDataIndex = (column: TableColumn<T>): keyof T & string | undefined =>
    column.dataIndex ?? column.key

  const resolveCell = (column: TableColumn<T>, row: T, index: number): ReactNode => {
    const dataIndex = resolveColumnDataIndex(column)
    const value = dataIndex ? row[dataIndex] : undefined
    if (!column.render) return value === undefined || value === null ? '-' : String(value)

    // Backward compatibility: old API passed full row as first argument.
    if (column.header && !column.dataIndex) return (column.render as (v: T, r: T, i: number) => ReactNode)(row, row, index)
    return column.render(value, row, index)
  }

  return (
    <div
      className={cn(
        'rounded-xl bg-white',
        bordered && 'border border-slate-200',
        className,
      )}
      {...props}
    >
      {header ? <div className="border-b border-slate-200 p-3">{header}</div> : null}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key ? String(column.key) : `col-${index}`}
                  className={cn(
                    'font-medium',
                    headerSizeClass,
                    alignClass(column.align),
                    column.className,
                  )}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {resolveColumnTitle(column)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr className="border-t border-slate-200">
                <td className={cn(cellSizeClass, 'text-slate-500')} colSpan={Math.max(1, columns.length)}>
                  {t('table_loading')}
                </td>
              </tr>
            ) : pagedRows.length === 0 ? (
              <tr className="border-t border-slate-200">
                <td className={cn(cellSizeClass, 'text-slate-500')} colSpan={Math.max(1, columns.length)}>
                  {resolvedEmptyText}
                </td>
              </tr>
            ) : (
              pagedRows.map((row, rowIndex) => (
                <tr key={getRowKey(row, rowIndex)} className="border-t border-slate-200 text-slate-800">
                  {columns.map((column, columnIndex) => (
                    <td
                      key={column.key ? String(column.key) : `cell-${rowIndex}-${columnIndex}`}
                      className={cn(
                        cellSizeClass,
                        alignClass(column.align),
                        column.className,
                      )}
                    >
                      {resolveCell(column, row, rowIndex)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {footer ? <div className="border-t border-slate-200 p-3">{footer}</div> : null}

      {paginationEnabled ? (
        <div className="border-t border-slate-200 p-2">
          <Pagination
            bordered={false}
            className="w-full gap-y-2"
            maxVisiblePages={5}
            onPageChange={onPageChange}
            onPageSizeChange={
              paginationConfig?.showSizeChanger ? onPageSizeChange : undefined
            }
            page={safeCurrent}
            pageSize={pageSize}
            pageSizeOptions={paginationConfig?.pageSizeOptions ?? [10, 20, 50, 100]}
            showPageNumbers
            totalItems={totalRows}
            totalPages={totalPages}
            variant={paginationConfig?.showSizeChanger ? 'advanced' : 'simple'}
          />
        </div>
      ) : null}
    </div>
  )
}

export default Table
