import type { ReactNode } from 'react'

export interface ComponentExample {
  title: string
  description: string
  code: string
  preview: ReactNode
}

export interface ComponentPropDoc {
  name: string
  type: string
  description: string
  required?: boolean
  defaultValue?: string
}

export interface ComponentDoc {
  slug: string
  name: string
  description: string
  examples: ComponentExample[]
  group: string
  propDocs?: ComponentPropDoc[]
}

export interface ComponentGroup {
  key: string
  title: string
  items: Array<{ slug: string; name: string }>
}
