import type { FormEvent, HTMLAttributes } from 'react'
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
  placeholder = 'Search...',
  className,
  ...props
}: TopbarSearchProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmitSearch?.()
  }

  return (
    <form className={cn('flex items-center gap-2', className)} onSubmit={handleSubmit} {...props}>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(event) => onValueChange?.(event.target.value)}
      />
      <Button size="sm" type="submit">
        Search
      </Button>
    </form>
  )
}

export default TopbarSearch
