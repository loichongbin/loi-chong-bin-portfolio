'use client'

import { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(nodeRef, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView || !nodeRef.current) return
    const node = nodeRef.current
    const controls = animate(from, to, {
      duration,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate(value) {
        node.textContent = prefix + value.toFixed(decimals) + suffix
      },
    })
    return () => controls.stop()
  }, [isInView, from, to, duration, prefix, suffix, decimals])

  return (
    <span ref={nodeRef} className={cn(className)}>
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  )
}
