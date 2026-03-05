import { useState, type InputHTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { FaXmark } from 'react-icons/fa6'
import { cn } from '../utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean
  allowClear?: boolean
  onValueChange?: (value: string) => void
}

export function Input({
  isInvalid = false,
  allowClear = false,
  value,
  defaultValue,
  onChange,
  onValueChange,
  disabled,
  className,
  ...props
}: InputProps) {
  const { t } = useTranslation()
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const isControlled = value !== undefined
  const displayedValue = isControlled ? value : internalValue
  const hasValue = displayedValue !== '' && displayedValue !== undefined && displayedValue !== null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value)
    onChange?.(e)
    onValueChange?.(e.target.value)
  }

  const handleClear = () => {
    if (!isControlled) setInternalValue('')
    const syntheticEvent = {
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>
    onChange?.(syntheticEvent)
    onValueChange?.('')
  }

  if (!allowClear) {
    return (
      <input
        className={cn(
          'h-9 w-full rounded-lg border bg-white px-3 text-sm outline-none transition placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-300',
          isInvalid ? 'border-red-500' : 'border-slate-200',
          className,
        )}
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...props}
      />
    )
  }

  return (
    <div className="relative w-full">
      <input
        className={cn(
          'h-9 w-full rounded-lg border bg-white px-3 pr-9 text-sm outline-none transition placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-300',
          isInvalid ? 'border-red-500' : 'border-slate-200',
          className,
        )}
        disabled={disabled}
        value={displayedValue}
        onChange={handleChange}
        {...props}
      />
      {allowClear && hasValue && !disabled ? (
        <button
          type="button"
          aria-label={t('input_clearAria')}
          className="absolute right-1 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
          onClick={handleClear}
        >
          <FaXmark className="text-xs" />
        </button>
      ) : null}
    </div>
  )
}

export default Input
