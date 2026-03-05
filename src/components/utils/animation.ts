import { useEffect, useRef, useState, type CSSProperties } from 'react'

export const UI_ANIMATION_DURATION_MS = 360
export const UI_ANIMATION_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'

export function getAnimationStyle(
  durationMs: number = UI_ANIMATION_DURATION_MS,
  easing: string = UI_ANIMATION_EASING,
): CSSProperties {
  return {
    transitionDuration: `${durationMs}ms`,
    transitionTimingFunction: easing,
  }
}

export function useAnimatedPresence(
  open: boolean,
  durationMs: number = UI_ANIMATION_DURATION_MS,
) {
  const [isMounted, setIsMounted] = useState(open)
  const [isVisible, setIsVisible] = useState(open)
  const closeTimeoutRef = useRef<number | null>(null)
  const enterRaf1Ref = useRef<number | null>(null)
  const enterRaf2Ref = useRef<number | null>(null)

  useEffect(() => {
    if (open) {
      if (closeTimeoutRef.current !== null) {
        clearTimeout(closeTimeoutRef.current)
        closeTimeoutRef.current = null
      }
      setIsMounted(true)
      setIsVisible(false)
      enterRaf1Ref.current = requestAnimationFrame(() => {
        enterRaf2Ref.current = requestAnimationFrame(() => {
          setIsVisible(true)
        })
      })
    } else {
      setIsVisible(false)
      closeTimeoutRef.current = window.setTimeout(() => {
        setIsMounted(false)
        closeTimeoutRef.current = null
      }, durationMs)
    }

    return () => {
      if (enterRaf1Ref.current !== null) {
        cancelAnimationFrame(enterRaf1Ref.current)
        enterRaf1Ref.current = null
      }
      if (enterRaf2Ref.current !== null) {
        cancelAnimationFrame(enterRaf2Ref.current)
        enterRaf2Ref.current = null
      }
    }
  }, [open, durationMs])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) {
        clearTimeout(closeTimeoutRef.current)
        closeTimeoutRef.current = null
      }
    }
  }, [])

  return { isMounted, isVisible, durationMs }
}
