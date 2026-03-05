import type { HTMLAttributes } from 'react'
import { Avatar } from '../Avatar'
import { Checkbox } from '../Checkbox'
import { cn } from '../utils'

export interface ActivityMember {
  id: string
  name: string
  role?: string
  avatarSrc?: string
  count?: number
  checked?: boolean
}

export interface ActivityMemberListProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'onToggle'> {
  members: ActivityMember[]
  onToggleMember?: (id: string, next: boolean) => void
}

export function ActivityMemberList({
  members,
  onToggleMember,
  className,
  ...props
}: ActivityMemberListProps) {
  return (
    <ul className={cn('space-y-2', className)} {...props}>
      {members.map((member) => (
        <li key={member.id} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-2">
          <Checkbox
            checked={member.checked}
            onChange={(event) => onToggleMember?.(member.id, event.target.checked)}
          />
          <Avatar src={member.avatarSrc} />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm text-slate-800">{member.name}</div>
            {member.role ? <div className="truncate text-xs text-slate-500">{member.role}</div> : null}
          </div>
          {member.count !== undefined ? <span className="text-sm text-slate-500">{member.count}</span> : null}
        </li>
      ))}
    </ul>
  )
}

export default ActivityMemberList
