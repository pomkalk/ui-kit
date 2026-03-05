import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FocusEventHandler,
  type InputHTMLAttributes,
} from 'react'
import { FaChevronDown, FaXmark } from 'react-icons/fa6'
import { cn, getAnimationStyle, useAnimatedPresence } from '../utils'

export interface AutocompleteOption
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  label: string
  value: string
  disabled?: boolean
}

export interface AutocompleteProps {
  options: AutocompleteOption[]
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  isInvalid?: boolean
  id?: string
  name?: string
  className?: string
  noOptionsText?: string
  allowClear?: boolean
  onBlur?: FocusEventHandler<HTMLInputElement>
  onFocus?: FocusEventHandler<HTMLInputElement>
  onValueChange?: (value: string) => void
  onChange?: (event: { target: { value: string } }) => void
  onSelect?: (option: AutocompleteOption) => void
}

export function Autocomplete({
  options,
  value,
  defaultValue,
  placeholder = 'Search...',
  disabled = false,
  isInvalid = false,
  id,
  name,
  className,
  noOptionsText = 'No options',
  allowClear = false,
  onBlur,
  onFocus,
  onValueChange,
  onChange,
  onSelect,
}: AutocompleteProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [placement, setPlacement] = useState<'bottom' | 'top'>('bottom')
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputValue = value ?? internalValue
  const { isMounted: isPanelMounted, isVisible: isPanelVisible } =
    useAnimatedPresence(isOpen)
  const panelAnimationStyle = getAnimationStyle()

  const filteredOptions = useMemo(() => {
    const normalized = inputValue.trim().toLowerCase()
    if (!normalized) return options
    return options.filter((option) => {
      const byLabel = option.label.toLowerCase().includes(normalized)
      const byValue = option.value.toLowerCase().includes(normalized)
      return byLabel || byValue
    })
  }, [inputValue, options])

  const enabledOptions = useMemo(
    () => filteredOptions.filter((option) => !option.disabled),
    [filteredOptions],
  )
  const hasValue = inputValue.trim().length > 0

  const updatePlacement = () => {
    const rect = rootRef.current?.getBoundingClientRect()
    if (!rect) return
    const panelHeight = panelRef.current?.offsetHeight
    if (!panelHeight) {
      setPlacement('bottom')
      return
    }

    const screenGap = 8
    const spaceBelow = window.innerHeight - rect.bottom
    const spaceAbove = rect.top
    const shouldOpenTop =
      spaceBelow < panelHeight + screenGap && spaceAbove >= panelHeight + screenGap
    setPlacement(shouldOpenTop ? 'top' : 'bottom')
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
    if (isPanelMounted) updatePlacement()

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('resize', handleViewportChange)
      window.removeEventListener('scroll', handleViewportChange, true)
    }
  }, [isOpen, isPanelMounted])

  useEffect(() => {
    if (!isOpen || !isPanelMounted) return
    const rafId = requestAnimationFrame(() => updatePlacement())
    return () => cancelAnimationFrame(rafId)
  }, [isOpen, isPanelMounted, filteredOptions.length])

  useEffect(() => {
    if (!isOpen) {
      setActiveIndex(-1)
      return
    }
    setActiveIndex(enabledOptions.length > 0 ? 0 : -1)
  }, [isOpen, enabledOptions.length])

  const emitValue = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue)
    onValueChange?.(nextValue)
    onChange?.({ target: { value: nextValue } })
  }

  const selectOption = (option: AutocompleteOption) => {
    emitValue(option.label)
    onSelect?.(option)
    setIsOpen(false)
  }

  const clearValue = () => {
    emitValue('')
    setActiveIndex(enabledOptions.length > 0 ? 0 : -1)
    setIsOpen(true)
    inputRef.current?.focus()
  }

  return (
    <div className={cn('relative w-full', className)} ref={rootRef}>
      <div className="relative">
        <input
          aria-activedescendant={
            activeIndex >= 0 ? `autocomplete-option-${enabledOptions[activeIndex]?.value}` : undefined
          }
          aria-controls={isPanelMounted ? 'autocomplete-options-list' : undefined}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className={cn(
            'h-9 w-full rounded-lg border bg-white px-3 pr-16 text-sm outline-none transition placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-300',
            isInvalid ? 'border-red-500' : 'border-slate-200',
            disabled && 'cursor-not-allowed bg-slate-100 text-slate-400',
          )}
          disabled={disabled}
          id={id}
          ref={inputRef}
          name={name}
          onBlur={onBlur}
          onChange={(event) => {
            emitValue(event.target.value)
            if (!isOpen) setIsOpen(true)
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault()
              if (!isOpen) setIsOpen(true)
              if (enabledOptions.length === 0) return
              setActiveIndex((prev) => (prev + 1) % enabledOptions.length)
              return
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault()
              if (!isOpen) setIsOpen(true)
              if (enabledOptions.length === 0) return
              setActiveIndex((prev) =>
                prev <= 0 ? enabledOptions.length - 1 : prev - 1,
              )
              return
            }

            if (event.key === 'Enter') {
              if (!isOpen) return
              event.preventDefault()
              const activeOption =
                activeIndex >= 0 ? enabledOptions[activeIndex] : undefined
              if (activeOption) {
                selectOption(activeOption)
                return
              }
              const exactOption = enabledOptions.find(
                (option) => option.label.toLowerCase() === inputValue.trim().toLowerCase(),
              )
              if (exactOption) selectOption(exactOption)
            }
          }}
          onFocus={(event) => {
            onFocus?.(event)
            setIsOpen(true)
          }}
          placeholder={placeholder}
          value={inputValue}
        />
        {allowClear && hasValue && !disabled ? (
          <button
            aria-label="Очистить значение"
            className="absolute right-8 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-xs text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            onClick={clearValue}
            type="button"
          >
            <FaXmark />
          </button>
        ) : null}
        <button
          aria-label="Toggle autocomplete options"
          className="absolute right-1 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-xs text-slate-400 hover:bg-slate-100 disabled:cursor-not-allowed"
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
        >
          <span className={cn('transition-transform', isOpen && 'rotate-180')}>
            <FaChevronDown />
          </span>
        </button>
      </div>

      {isPanelMounted ? (
        <ul
          id="autocomplete-options-list"
          className={cn(
            'absolute z-20 max-h-60 w-full overflow-auto rounded-xl border border-slate-200 bg-white p-1 shadow-lg transition-[opacity,transform] will-change-[opacity,transform]',
            placement === 'bottom' ? 'top-full mt-1 origin-top' : 'bottom-full mb-1 origin-bottom',
            isPanelVisible ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-0',
            !isPanelVisible && 'pointer-events-none',
          )}
          ref={panelRef}
          role="listbox"
          style={panelAnimationStyle}
        >
          {filteredOptions.length === 0 ? (
            <li className="px-3 py-2 text-sm text-slate-400">{noOptionsText}</li>
          ) : (
            filteredOptions.map((option) => (
              <li key={`${option.value}-${option.label}`}>
                <button
                  aria-selected={
                    activeIndex >= 0 &&
                    enabledOptions[activeIndex]?.value === option.value
                  }
                  className={cn(
                    'flex w-full items-center rounded-lg px-3 py-2 text-left text-sm transition',
                    option.disabled
                      ? 'cursor-not-allowed text-slate-300'
                      : activeIndex >= 0 &&
                          enabledOptions[activeIndex]?.value === option.value
                        ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-700 hover:bg-slate-50',
                  )}
                  disabled={option.disabled}
                  id={`autocomplete-option-${option.value}`}
                  onClick={() => {
                    selectOption(option)
                  }}
                  onMouseEnter={() => {
                    if (option.disabled) return
                    const index = enabledOptions.findIndex(
                      (enabledOption) => enabledOption.value === option.value,
                    )
                    if (index >= 0) setActiveIndex(index)
                  }}
                  type="button"
                >
                  {option.label}
                </button>
              </li>
            ))
          )}
        </ul>
      ) : null}
    </div>
  )
}

export default Autocomplete
