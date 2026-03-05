import type { CSSProperties, HTMLAttributes } from 'react'

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection']
  align?: CSSProperties['alignItems']
  justify?: CSSProperties['justifyContent']
  gap?: number
  wrap?: CSSProperties['flexWrap']
}

export function Flex({
  direction = 'row',
  align = 'stretch',
  justify = 'flex-start',
  gap = 0,
  wrap = 'nowrap',
  style,
  ...props
}: FlexProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        gap,
        flexWrap: wrap,
        ...style,
      }}
      {...props}
    />
  )
}

export default Flex
