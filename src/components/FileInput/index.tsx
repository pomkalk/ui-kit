import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface FileInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  isInvalid?: boolean
}

export function FileInput({
  isInvalid = false,
  className,
  ...props
}: FileInputProps) {
  return (
    <input
      type="file"
      className={cn(
        'block w-full cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border bg-white p-1 text-sm text-slate-600 outline-none transition file:mr-3 file:cursor-pointer file:whitespace-nowrap file:rounded-md file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200 focus-visible:ring-2 focus-visible:ring-blue-300',
        isInvalid ? 'border-red-500' : 'border-slate-200',
        className,
      )}
      {...props}
    />
  )
}

export default FileInput
