import type { HTMLAttributes } from 'react'

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>

export function VisuallyHidden(props: VisuallyHiddenProps) {
  return <span className="sr-only" {...props} />
}

export default VisuallyHidden
