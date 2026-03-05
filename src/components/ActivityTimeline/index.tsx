import type { HTMLAttributes, ReactNode } from 'react'
import { Avatar } from '../Avatar'
import { cn } from '../utils'

export interface ActivityEvent {
  id: string
  user: string
  time: string
  message: ReactNode
  avatarSrc?: string
}

export interface ActivityTimelineProps extends HTMLAttributes<HTMLUListElement> {
  events: ActivityEvent[]
}

export function ActivityTimeline({
  events,
  className,
  ...props
}: ActivityTimelineProps) {
  return (
    <ul className={cn('space-y-3', className)} {...props}>
      {events.map((eventItem) => (
        <li key={eventItem.id} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
          <Avatar src={eventItem.avatarSrc} />
          <div className="min-w-0">
            <div className="text-sm text-slate-800">
              <span className="font-medium">{eventItem.user}</span> {eventItem.message}
            </div>
            <div className="text-xs text-slate-500">{eventItem.time}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ActivityTimeline
