import type { HTMLAttributes } from 'react'

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function Spacer({ size = 8, style, ...props }: SpacerProps) {
  return <div style={{ width: size, height: size, flexShrink: 0, ...style }} {...props} />
}

export default Spacer
