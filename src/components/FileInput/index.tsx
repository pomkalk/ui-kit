import type { InputHTMLAttributes } from 'react'
import { Input } from '../Input'

export type FileInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export function FileInput(props: FileInputProps) {
  return <Input type="file" {...props} />
}

export default FileInput
