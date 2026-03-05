import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface AppShellProps extends HTMLAttributes<HTMLDivElement> {
  sidebar: ReactNode
  topbar?: ReactNode
}

export function AppShell({
  sidebar,
  topbar,
  className,
  children,
  ...props
}: AppShellProps) {
  return (
    <div className={cn('mx-auto flex max-w-[1440px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50', className)} {...props}>
      <aside className="w-[232px] border-r border-slate-200 bg-white p-4">{sidebar}</aside>
      <main className="flex-1 p-6">
        {topbar ? <div className="mb-6">{topbar}</div> : null}
        {children}
      </main>
    </div>
  )
}

export default AppShell
