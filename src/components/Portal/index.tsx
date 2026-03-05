import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: ReactNode
  container?: Element | DocumentFragment | null
}

export function Portal({ children, container }: PortalProps) {
  if (typeof document === 'undefined') return null
  return createPortal(children, container ?? document.body)
}

export default Portal
