import type { InputHTMLAttributes } from 'react'
import { Input } from '../Input'

export type TimePickerProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function TimePicker(props: TimePickerProps) {
  return <Input type="time" {...props} />
}

export default TimePicker
