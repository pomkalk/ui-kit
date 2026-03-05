import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FocusEventHandler,
  type OptionHTMLAttributes,
} from 'react'
import { FaChevronDown } from 'react-icons/fa6'
import { cn } from '../utils'

export interface SelectOption extends OptionHTMLAttributes<HTMLOptionElement> {
  label: string
  value: string
}

export interface SelectProps {
  options: SelectOption[]
  isInvalid?: boolean
  placeholder?: string
  value?: string
  defaultValue?: string
  disabled?: boolean
  name?: string
  className?: string
  id?: string
  onBlur?: FocusEventHandler<HTMLButtonElement>
  onFocus?: FocusEventHandler<HTMLButtonElement>
  onValueChange?: (value: string) => void
  onChange?: (event: { target: { value: string } }) => void
}

export function Select({
  options,
  isInvalid = false,
  placeholder = 'Select option',
  value,
  defaultValue,
  disabled,
  name,
  id,
  onBlur,
  onFocus,
  onValueChange,
  onChange,
  className,
}: SelectProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLUListElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [placement, setPlacement] = useState<'bottom' | 'top'>('bottom')
  const [internalValue, setInternalValue] = useState(String(defaultValue ?? ''))

  const selectedValue = useMemo(
    () => (value !== undefined ? String(value) : internalValue),
    [internalValue, value],
  )

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue],
  )

  const updatePlacement = () => {
    const rect = rootRef.current?.getBoundingClientRect()
    if (!rect) return
    const panelHeight = panelRef.current?.offsetHeight ?? 260
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top
    setPlacement(
      spaceBelow < panelHeight + 8 && spaceAbove > spaceBelow ? 'top' : 'bottom',
    )
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
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

  const handleSelect = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue)
    onValueChange?.(nextValue)
    onChange?.({ target: { value: nextValue } })
    setIsOpen(false)
  }

  return (
    <div className={cn('relative w-full', className)} ref={rootRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={cn(
          'flex h-9 w-full items-center justify-between rounded-lg border bg-white px-3 text-sm text-left outline-none transition focus-visible:ring-2 focus-visible:ring-blue-300',
        isInvalid ? 'border-red-500' : 'border-slate-200',
        )}
        disabled={disabled}
        id={id}
        name={name}
        onBlur={onBlur}
        onClick={() => setIsOpen((prev) => !prev)}
        onFocus={onFocus}
        type="button"
      >
        <span
          className={cn(
            'truncate',
            selectedOption ? 'text-slate-800' : 'text-slate-400',
          )}
        >
          {selectedOption?.label ?? placeholder}
        </span>
        <span
          className={cn(
            'ml-2 inline-flex text-xs text-slate-400 transition-transform',
            isOpen && 'rotate-180',
          )}
        >
          <FaChevronDown />
        </span>
      </button>

      {isOpen ? (
        <ul
          className={cn(
            'absolute z-20 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white p-1 shadow-lg',
            placement === 'bottom' ? 'top-full mt-1' : 'bottom-full mb-1',
          )}
          ref={panelRef}
          role="listbox"
        >
          {options.map((option) => {
            const isSelected = option.value === selectedValue
            return (
              <li key={option.value}>
                <button
                  className={cn(
                    'flex w-full items-center rounded-lg px-3 py-2 text-left text-sm transition',
                    option.disabled
                      ? 'cursor-not-allowed text-slate-300'
                      : isSelected
                        ? 'bg-blue-50 font-medium text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50',
                  )}
                  disabled={option.disabled}
                  onClick={() => handleSelect(option.value)}
                  type="button"
                >
                  {option.label}
                </button>
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Select
