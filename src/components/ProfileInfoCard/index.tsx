import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface ProfileInfoCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode
  action?: ReactNode
}

export function ProfileInfoCard({
  title,
  action,
  className,
  children,
  ...props
}: ProfileInfoCardProps) {
  return (
    <div className={cn('rounded-2xl border border-slate-200 bg-white p-4', className)} {...props}>
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  )
}

export default ProfileInfoCard
