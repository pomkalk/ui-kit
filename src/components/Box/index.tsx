import type { HTMLAttributes } from 'react'

export type BoxProps = HTMLAttributes<HTMLDivElement>

export function Box(props: BoxProps) {
  return <div {...props} />
}

export default Box
