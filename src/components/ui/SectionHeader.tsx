'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleAccent?: string
  description?: string
  centered?: boolean
  className?: string
  light?: boolean
}

export function SectionHeader({
  eyebrow, title, titleAccent, description,
  centered = false, className, light = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(centered && 'text-center', className)}
    >
      {eyebrow && (
        <div className={cn(
          'inline-flex items-center gap-2 mb-4 text-xs font-bold font-mono tracking-widest uppercase',
          light ? 'text-orange-400' : 'text-orange-600 dark:text-orange-400'
        )}>
          <span className="block w-6 h-px bg-current" />
          {eyebrow}
          <span className="block w-6 h-px bg-current" />
        </div>
      )}
      <h2 className={cn(
        'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight',
        light ? 'text-white' : 'text-gray-900 dark:text-white'
      )}>
        {title}{' '}
        {titleAccent && (
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            {titleAccent}
          </span>
        )}
      </h2>
      {description && (
        <p className={cn(
          'mt-5 text-lg leading-relaxed max-w-2xl',
          centered && 'mx-auto',
          light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'
        )}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
