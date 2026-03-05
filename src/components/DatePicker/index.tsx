import { useEffect, useMemo, useRef, useState, type FocusEventHandler } from 'react'
import {
  FaAnglesLeft,
  FaAnglesRight,
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa6'
import { cn } from '../utils'

export interface DatePickerProps {
  value?: string
  defaultValue?: string
  min?: string
  max?: string
  disabled?: boolean
  isInvalid?: boolean
  placeholder?: string
  name?: string
  id?: string
  className?: string
  onBlur?: FocusEventHandler<HTMLButtonElement>
  onFocus?: FocusEventHandler<HTMLButtonElement>
  onValueChange?: (value: string) => void
  onChange?: (event: { target: { value: string } }) => void
}

function parseDate(value?: string): Date | null {
  if (!value) return null
  const [y, m, d] = value.split('-').map(Number)
  if (!y || !m || !d) return null
  return new Date(y, m - 1, d)
}

function toDateString(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function isSameDay(a: Date | null, b: Date | null): boolean {
  if (!a || !b) return false
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function buildCalendarDays(viewDate: Date): Date[] {
  const monthStart = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1)
  const startWeekday = monthStart.getDay()
  const gridStart = new Date(
    monthStart.getFullYear(),
    monthStart.getMonth(),
    1 - startWeekday,
  )
  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart)
    date.setDate(gridStart.getDate() + index)
    return date
  })
}

function inRange(date: Date, min?: Date | null, max?: Date | null): boolean {
  const current = startOfDay(date).getTime()
  const minValue = min ? startOfDay(min).getTime() : -Infinity
  const maxValue = max ? startOfDay(max).getTime() : Infinity
  return current >= minValue && current <= maxValue
}

export function DatePicker({
  value,
  defaultValue,
  min,
  max,
  disabled = false,
  isInvalid = false,
  placeholder = 'Select date',
  name,
  id,
  className,
  onBlur,
  onFocus,
  onValueChange,
  onChange,
}: DatePickerProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [placement, setPlacement] = useState<'bottom' | 'top'>('bottom')
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const selectedValue = value ?? internalValue
  const selectedDate = useMemo(() => parseDate(selectedValue), [selectedValue])
  const [viewDate, setViewDate] = useState(selectedDate ?? new Date())
  const minDate = useMemo(() => parseDate(min), [min])
  const maxDate = useMemo(() => parseDate(max), [max])
  const today = new Date()
  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        month: 'short',
        year: 'numeric',
      }).format(viewDate),
    [viewDate],
  )
  const days = useMemo(() => buildCalendarDays(viewDate), [viewDate])

  const updatePlacement = () => {
    const rect = rootRef.current?.getBoundingClientRect()
    if (!rect) return
    const panelHeight = panelRef.current?.offsetHeight ?? 340
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top
    setPlacement(
      spaceBelow < panelHeight + 8 && spaceAbove > spaceBelow ? 'top' : 'bottom',
    )
  }

  useEffect(() => {
    if (selectedDate) setViewDate(selectedDate)
  }, [selectedDate])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false)
    }
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const handleViewportChange = () => updatePlacement()

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    window.addEventListener('resize', handleViewportChange)
    window.addEventListener('scroll', handleViewportChange, true)
    updatePlacement()
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleViewportChange)
      window.removeEventListener('scroll', handleViewportChange, true)
    }
  }, [isOpen])

  const selectDate = (nextDate: Date) => {
    if (!inRange(nextDate, minDate, maxDate)) return
    const nextValue = toDateString(nextDate)
    if (value === undefined) setInternalValue(nextValue)
    onValueChange?.(nextValue)
    onChange?.({ target: { value: nextValue } })
    setIsOpen(false)
  }

  return (
    <div className={cn('relative w-full', className)} ref={rootRef}>
      {name ? <input name={name} type="hidden" value={selectedValue} /> : null}

      <button
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={cn(
          'flex h-9 w-full items-center justify-between rounded-lg border bg-white px-3 text-sm text-left outline-none transition focus-visible:ring-2 focus-visible:ring-blue-300',
          isInvalid ? 'border-red-500' : 'border-slate-200',
          disabled && 'cursor-not-allowed bg-slate-100 text-slate-400',
        )}
        disabled={disabled}
        id={id}
        onBlur={onBlur}
        onClick={() => setIsOpen((prev) => !prev)}
        onFocus={onFocus}
        type="button"
      >
        <span className={cn('truncate', selectedDate ? 'text-slate-800' : 'text-slate-400')}>
          {selectedDate
            ? new Intl.DateTimeFormat('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }).format(selectedDate)
            : placeholder}
        </span>
        <span className="ml-2 inline-flex text-slate-400">
          <FaCalendar />
        </span>
      </button>

      {isOpen ? (
        <div
          className={cn(
            'absolute z-30 w-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg',
            placement === 'bottom' ? 'top-full mt-2' : 'bottom-full mb-2',
          )}
          ref={panelRef}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
            <div className="inline-flex items-center gap-1">
              <button
                className="inline-flex h-7 w-7 items-center justify-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                onClick={() =>
                  setViewDate(
                    (prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), 1),
                  )
                }
                type="button"
              >
                <FaAnglesLeft />
              </button>
              <button
                className="inline-flex h-7 w-7 items-center justify-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                onClick={() =>
                  setViewDate(
                    (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
                  )
                }
                type="button"
              >
                <FaChevronLeft />
              </button>
            </div>
            <div className="text-base font-semibold text-slate-900">{monthLabel}</div>
            <div className="inline-flex items-center gap-1">
              <button
                className="inline-flex h-7 w-7 items-center justify-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                onClick={() =>
                  setViewDate(
                    (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
                  )
                }
                type="button"
              >
                <FaChevronRight />
              </button>
              <button
                className="inline-flex h-7 w-7 items-center justify-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                onClick={() =>
                  setViewDate(
                    (prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), 1),
                  )
                }
                type="button"
              >
                <FaAnglesRight />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 px-3 py-1.5">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((weekday) => (
              <div key={weekday} className="py-0.5 text-center text-xs text-slate-500">
                {weekday}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 px-3 pb-2.5">
            {days.map((date) => {
              const outsideMonth = date.getMonth() !== viewDate.getMonth()
              const isSelected = isSameDay(selectedDate, date)
              const isToday = isSameDay(today, date)
              const isDisabledDay = !inRange(date, minDate, maxDate)

              return (
                <button
                  key={toDateString(date)}
                  className={cn(
                    'inline-flex h-8 items-center justify-center rounded-lg text-sm transition',
                    isSelected
                      ? 'bg-blue-50 font-semibold text-blue-700 ring-1 ring-blue-500'
                      : isDisabledDay
                        ? 'cursor-not-allowed text-slate-300'
                        : outsideMonth
                          ? 'text-slate-400 hover:bg-slate-50'
                          : isToday
                            ? 'font-semibold text-blue-700 hover:bg-blue-50'
                            : 'text-slate-800 hover:bg-slate-50',
                  )}
                  disabled={isDisabledDay}
                  onClick={() => selectDate(date)}
                  type="button"
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>

          <div className="border-t border-slate-200 px-3 py-2">
            <button
              className="h-8 w-full rounded-lg text-sm font-medium text-blue-600 hover:bg-blue-50"
              onClick={() => {
                setViewDate(today)
                selectDate(today)
              }}
              type="button"
            >
              Today
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default DatePicker
