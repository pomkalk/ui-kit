import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface TableColumn<T> {
  key: keyof T & string
  header: ReactNode
  className?: string
  render?: (row: T) => ReactNode
}

export interface TableProps<T> extends HTMLAttributes<HTMLDivElement> {
  columns: Array<TableColumn<T>>
  rows: T[]
  rowKey: (row: T, index: number) => string
}

export function Table<T>({
  columns,
  rows,
  rowKey,
  className,
  ...props
}: TableProps<T>) {
  return (
    <div className={cn('overflow-x-auto rounded-xl border border-slate-200 bg-white', className)} {...props}>
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-slate-600">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={cn('px-4 py-3 font-medium', column.className)}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={rowKey(row, index)} className="border-t border-slate-200 text-slate-800">
              {columns.map((column) => (
                <td key={column.key} className={cn('px-4 py-3', column.className)}>
                  {column.render ? column.render(row) : String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
