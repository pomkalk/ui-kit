import type { InputHTMLAttributes } from 'react'
import { Input } from '../Input'

export type DatePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function DatePicker(props: DatePickerProps) {
  return <Input type="date" {...props} />
}

export default DatePicker
