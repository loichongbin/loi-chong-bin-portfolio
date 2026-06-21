'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, ChevronRight } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { cn } from '@/lib/utils'

interface Project {
  id: string; name: string; category: string[]; location: string; year: string
  description: string; highlights: string[]
  metrics: { value: string; color: string }[]
  gradient: string; border: string
}

const projects: Project[] = [
  {
    id: 'pan-borneo', name: 'Pan Borneo Highway', category: ['Bridge Design','All'],
    location: 'Sabah / Sarawak', year: 'Apr 2025–Present',
    description: 'Lead RC bridge designer for WP32, WP33 and WP35 packages along Malaysia\'s landmark Pan Borneo Highway — with post-tensioned LS Girder design.',
    highlights: [
      'Led RC bridge design for three highway packages (WP32/33/35)',
      'Post-Tensioned LS Girder design ensuring load compliance',
      'Reinforcement poundage optimization: ~20% construction cost savings',
      'Drawing coordination with drafters for timely project delivery',
    ],
    metrics: [{value:'~20% Cost Savings',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'},{value:'RC Bridge',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-orange-900/50 to-gray-800', border: 'border-orange-500/35',
  },
  {
    id: 'grandhill', name: 'Grandhill Genting Infra', category: ['Bridge Design','All'],
    location: 'Genting Highlands', year: 'Jul 2025–Present',
    description: 'Comprehensive substructure & superstructure design for a major Genting development — multi-span integral bridge with PT T-Beam girders and counterfort wall.',
    highlights: [
      'Substructure & superstructure design using STRAP',
      'Post-Tensioned T-Beam girder design for approach span',
      'RCC counterfort wall design for soil retention',
      'Contractor coordination to resolve technical issues on site',
    ],
    metrics: [{value:'Integral Bridge',color:'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25'},{value:'PT T-Beam',color:'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25'}],
    gradient: 'from-emerald-900/40 to-gray-800', border: 'border-emerald-500/35',
  },
  {
    id: 'jalan-yew', name: 'Jalan Yew–Sg. Besi Widening', category: ['Widening','All'],
    location: 'Kuala Lumpur', year: 'Jan 2024–Present',
    description: 'Flyover widening project with post-tensioned Flex-C Girder solution — a constructability-driven alternative that achieved 30% cost reduction versus original scheme.',
    highlights: [
      'Collaborated on PT Flex-C Girder design for flyover widening',
      'Impact assessment of existing flyover during beam launching',
      'Shop drawing review and RFI resolution for contractor',
      '30% cost reduction via analytical engineering alternative',
    ],
    metrics: [{value:'~30% Cost Saving',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'},{value:'Flex-C Girder',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-teal-900/40 to-gray-800', border: 'border-teal-500/35',
  },
  {
    id: 'cameron', name: 'Cameron Bridge', category: ['Bridge Design','All'],
    location: 'Cameron Highlands', year: '2024',
    description: 'Engaged as alternative design consultant — re-engineered full superstructure and substructure to achieve significant material efficiency and construction savings.',
    highlights: [
      'Alternative design consultant for full bridge redesign',
      'Superstructure redesign: reduced reinforcement without compromising capacity',
      'Substructure design optimization',
      'Structural integration and drawings coordination',
    ],
    metrics: [{value:'Alt. Consultant',color:'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25'},{value:'Cost Optimized',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'}],
    gradient: 'from-amber-900/35 to-gray-800', border: 'border-amber-500/35',
  },
  {
    id: 'palekbang', name: 'Palekbang Cable-Stayed Approach', category: ['Bridge Design','All'],
    location: 'Kelantan', year: '2024',
    description: 'Approach span design for a cable-stayed bridge — post-tensioned T-Beam and LS Girder solutions with full bridge modelling in STRAP.',
    highlights: [
      'Post-Tensioned T-Beam design for approach span',
      'LS Girder design and optimization',
      'Full bridge modelling in STRAP',
      'Cable-stayed structural integration',
    ],
    metrics: [{value:'Cable-Stayed',color:'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/25'},{value:'Post-Tensioned',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-violet-900/35 to-gray-800', border: 'border-violet-500/35',
  },
  {
    id: 'pelubang', name: 'Pelubang WTP Pipe Crossing', category: ['Infrastructure','All'],
    location: 'Selangor', year: '2024',
    description: '11 pipe-crossing bridge structures over a major water treatment plant corridor — full foundation design, soil assessment, and successful tender submission.',
    highlights: [
      '11 bridge structures designed from scratch',
      'Full foundation and pile design',
      'Soil assessment and geotechnical interpretation',
      '~40% cost reduction; successful tender submission',
    ],
    metrics: [{value:'~40% Cost Saving',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'},{value:'11 Structures',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-cyan-900/35 to-gray-800', border: 'border-cyan-500/35',
  },
  {
    id: 'm-nova', name: 'M-Nova Development', category: ['Bridge Design','All'],
    location: 'Malaysia', year: '2023',
    description: 'Slip-in connection bridge and junction bridge design for a mixed development — full prestressed concrete detailing and technical review responses to client.',
    highlights: [
      'Slip-In Connection Bridge structural design',
      'Junction Bridge design and detailing',
      'Prestressed concrete design and drawings',
      'Technical review responses to client queries',
    ],
    metrics: [{value:'PS Concrete',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'},{value:'Slip-In Connection',color:'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/25'}],
    gradient: 'from-blue-900/35 to-gray-800', border: 'border-blue-500/35',
  },
  {
    id: 'skve', name: 'SKVE Crossing Flyover', category: ['Bridge Design','All'],
    location: 'Selangor', year: '2023',
    description: 'Full structural design of SKVE crossing flyover — crosshead, abutments, and pile design with comprehensive structural optimization.',
    highlights: [
      'Crosshead structural design and detailing',
      'Abutment design and detailing',
      'Pile design and capacity verification',
      'Structural optimization throughout',
    ],
    metrics: [{value:'Flyover',color:'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25'},{value:'2023',color:'text-gray-400 bg-gray-500/10 border-gray-500/25'}],
    gradient: 'from-rose-900/30 to-gray-800', border: 'border-rose-500/30',
  },
]

const filters = ['All','Bridge Design','Widening','Infrastructure']

const container = { hidden:{opacity:0}, visible:{opacity:1, transition:{staggerChildren:0.07, delayChildren:0.03}} }
const card = { hidden:{opacity:0,y:22,scale:0.97}, visible:{opacity:1,y:0,scale:1,transition:{duration:0.5,ease:'easeOut'}} }

export function Projects() {
  const [active, setActive] = useState('All')
  const filtered = projects.filter(p => p.category.includes(active))

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Infrastructure Projects That"
          titleAccent="Deliver Value"
          description="Eight major bridge and infrastructure projects across Malaysia — each with measurable cost savings, design innovation, and engineering excellence."
          centered
          className="mb-12"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                'px-5 py-2.5 text-sm font-semibold rounded-xl border transition-all duration-200',
                active === f
                  ? 'bg-orange-500 text-white border-orange-500 shadow-glow-orange-sm'
                  : 'text-gray-600 dark:text-gray-400 border-stone-200 dark:border-gray-700 hover:border-orange-400/50 hover:text-orange-600 dark:hover:text-orange-400 bg-white dark:bg-gray-900'
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container} initial="hidden" animate="visible" exit={{opacity:0}}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filtered.map(project => (
              <motion.div
                key={project.id}
                variants={card}
                whileHover={{ y:-5, transition:{duration:0.2} }}
                className={cn(
                  'group flex flex-col rounded-2xl overflow-hidden border bg-gray-800 dark:bg-gray-800 transition-all duration-300 hover:shadow-card-lift-dark',
                  project.border
                )}
              >
                {/* Header gradient */}
                <div className={cn('relative h-28 bg-gradient-to-br p-5', project.gradient)}>
                  <div className="absolute inset-0 engineering-grid-fine opacity-40" />
                  <div className="relative">
                    <div className="text-[10px] font-mono text-gray-400 mb-1.5">{project.year}</div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <MapPin size={10} className="flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5 space-y-3.5">
                  <h3 className="font-bold text-white text-sm leading-snug group-hover:text-orange-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.metrics.map(m => (
                      <span key={m.value} className={cn('px-2 py-1 text-[10px] font-bold font-mono rounded-lg border', m.color)}>
                        {m.value}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1.5 flex-1">
                    {project.highlights.slice(0,3).map(h => (
                      <li key={h} className="flex items-start gap-2">
                        <ChevronRight size={10} className="text-orange-500 flex-shrink-0 mt-1" />
                        <span className="text-[11px] text-gray-400 leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
