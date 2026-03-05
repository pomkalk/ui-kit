import type { FormEvent, HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../Button'
import { Input } from '../Input'
import { cn } from '../utils'

export interface TopbarSearchProps extends HTMLAttributes<HTMLFormElement> {
  value?: string
  onValueChange?: (value: string) => void
  onSubmitSearch?: () => void
  placeholder?: string
}

export function TopbarSearch({
  value,
  onValueChange,
  onSubmitSearch,
  placeholder,
  className,
  ...props
}: TopbarSearchProps) {
  const { t } = useTranslation()
  const resolvedPlaceholder = placeholder ?? t('topbarSearch_placeholder')
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmitSearch?.()
  }

  return (
    <form className={cn('flex items-center gap-2', className)} onSubmit={handleSubmit} {...props}>
      <Input
        placeholder={resolvedPlaceholder}
        value={value}
        onChange={(event) => onValueChange?.(event.target.value)}
      />
      <Button size="sm" type="submit">
        {t('topbarSearch_button')}
      </Button>
    </form>
  )
}

export default TopbarSearch
