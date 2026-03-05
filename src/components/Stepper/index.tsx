import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export interface StepperProps extends HTMLAttributes<HTMLOListElement> {
  steps: string[]
  activeStep: number
}

export function Stepper({
  steps,
  activeStep,
  className,
  ...props
}: StepperProps) {
  return (
    <ol className={cn('flex items-center gap-3', className)} {...props}>
      {steps.map((step, index) => {
        const done = index <= activeStep
        return (
          <li key={step} className="flex items-center gap-2 text-sm">
            <span
              className={cn(
                'inline-flex h-6 w-6 items-center justify-center rounded-full border',
                done
                  ? 'border-blue-500 bg-blue-500 text-white'
                  : 'border-slate-300 text-slate-500',
              )}
            >
              {index + 1}
            </span>
            <span className={done ? 'text-slate-900' : 'text-slate-500'}>{step}</span>
          </li>
        )
      })}
    </ol>
  )
}

export default Stepper
