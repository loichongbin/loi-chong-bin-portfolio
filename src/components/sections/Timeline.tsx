'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Compass, Rocket, ChevronRight } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { cn } from '@/lib/utils'

const timelineData = [
  {
    id: 'intern',
    period: 'Dec 2021 – Mar 2022',
    icon: GraduationCap,
    title: 'Bridge Design Engineer (Intern)',
    org: 'OSD Consultants · Ara Damansara, PJ',
    color: 'sky',
    accent: 'text-sky-600 dark:text-sky-400',
    border: 'border-sky-500',
    bg:     'bg-sky-500/10',
    dot:    'bg-sky-500',
    description:
      'Internship alongside final year of degree at Monash University Malaysia. Supported senior engineers with structural calculations, drawings, and RC bridge analysis.',
    items: [
      'Collaborated on design calculations and plans for RC bridge projects',
      'Conducted structural analysis using STRAP and ADSEC',
    ],
    tags: ['STRAP', 'ADSEC', 'RC Bridge', 'Internship'],
  },
  {
    id: 'grad',
    period: 'Feb 2023 – 2024',
    icon: Briefcase,
    title: 'Structural Design Engineer',
    org: 'OSD Consultants · Ara Damansara, PJ',
    color: 'orange',
    accent: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-500',
    bg:     'bg-orange-500/10',
    dot:    'bg-orange-500',
    description:
      'Joined full-time after graduating. Focused on RC and prestressed concrete bridge design, STRAP/MIDAS modelling, and structural drawings coordination across multiple projects.',
    items: [
      'SKVE Crossing Flyover — crosshead, abutment & pile design',
      'M-Nova Development — slip-in connection & junction bridge',
      'Pelubang WTP — 11 pipe-crossing bridge structures, ~40% cost reduction',
      'Megalift Bridge Crossing — RC bridge design',
    ],
    tags: ['RC Bridge', 'STRAP', 'MIDAS Civil', 'Foundation Design', 'Prestressed'],
  },
  {
    id: 'expanded',
    period: '2024',
    icon: Compass,
    title: 'Alternative Design Consultant + Site Engineer',
    org: 'OSD Consultants — Expanded Scope',
    color: 'amber',
    accent: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500',
    bg:     'bg-amber-500/10',
    dot:    'bg-amber-500',
    description:
      'Expanded into alternative design consultancy, value engineering, and field-based roles — site inspections at Sungai Pontian Kechil and Sepang, shop drawing reviews, and RFI resolution.',
    items: [
      'Cameron Bridge — alternative design consultant, re-engineered superstructure & substructure',
      'Palekbang Cable-Stayed Approach — PT T-Beam & LS Girder design',
      'Jalan Yew–Sg. Besi Widening — Flex-C Girder solution, 30% cost reduction',
      'Site inspections: Sungai Pontian Kechil Bridge, Sepang',
    ],
    tags: ['Alt. Design', 'Value Engineering', 'Site QA/QC', 'RFI', 'Post-Tensioned'],
  },
  {
    id: 'major',
    period: 'Apr 2025 – Present',
    icon: Rocket,
    title: 'Senior Project Delivery',
    org: 'OSD Consultants — Major Infrastructure',
    color: 'emerald',
    accent: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-500',
    bg:     'bg-emerald-500/10',
    dot:    'bg-emerald-500',
    description:
      'Leading RC bridge design for two of Malaysia\'s most prominent national infrastructure programmes, with expanded project coordination responsibilities and team leadership.',
    items: [
      'Pan Borneo Highway (WP32, WP33, WP35) — ~20% construction cost savings',
      'Grandhill Genting Infra — multi-span integral bridge, PT T-beam, counterfort wall',
      'Post-Tensioned LS Girder design for Pan Borneo Highway',
      'Coordinate with engineers, drafters and contractors for timely project delivery',
    ],
    tags: ['Pan Borneo', 'Integral Bridge', 'Post-Tensioned', 'Project Coordination', 'STRAP'],
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="section-padding bg-stone-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 engineering-dots opacity-50 dark:opacity-80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Engineering Journey"
          title="From Intern to"
          titleAccent="Infrastructure Lead"
          description="Three years at OSD Consultants — a trajectory of expanding complexity, responsibility, and project impact."
          centered
          className="mb-16"
        />

        {/* Vertical timeline */}
        <div className="relative">
          {/* Spine — orange-to-emerald gradient matching career progression */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(to bottom, #0ea5e9, #f97316, #f59e0b, #10b981)' }}
          />

          <div className="space-y-8">
            {timelineData.map((era, i) => {
              const Icon = era.icon
              return (
                <motion.div
                  key={era.id}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.65, delay: i * 0.08, ease: 'easeOut' }}
                  className="relative pl-16 sm:pl-20"
                >
                  {/* Node icon */}
                  <div className={cn(
                    'absolute left-0 sm:left-2 flex items-center justify-center w-12 h-12 rounded-xl border-2 bg-white dark:bg-gray-900',
                    era.border
                  )}>
                    <Icon size={20} className={era.accent} />
                  </div>

                  {/* Dot on spine */}
                  <div className={cn('absolute left-[22px] sm:left-[30px] top-5 w-3 h-3 rounded-full border-2 border-white dark:border-gray-950', era.dot)} />

                  {/* Card */}
                  <div className="p-6 sm:p-7 rounded-2xl border bg-white dark:bg-gray-900 border-stone-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-500/40 hover:shadow-card-lift dark:hover:shadow-card-lift-dark transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <span className={cn('inline-block px-2.5 py-1 text-[11px] font-bold font-mono rounded-lg mb-2', era.bg, era.accent)}>
                          {era.period}
                        </span>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">{era.title}</h3>
                        <div className="text-sm text-gray-500 font-mono mt-0.5">{era.org}</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                      {era.description}
                    </p>

                    {/* Key items */}
                    <ul className="space-y-2 mb-5">
                      {era.items.map(item => (
                        <li key={item} className="flex items-start gap-2">
                          <ChevronRight size={13} className={cn('flex-shrink-0 mt-0.5', era.accent)} />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {era.tags.map(tag => (
                        <span key={tag} className={cn('px-2.5 py-1 text-xs font-medium rounded-lg border', era.bg, era.accent, `border-current/20`)}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
