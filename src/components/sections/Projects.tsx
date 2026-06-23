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
    description: 'One of Malaysia\'s most ambitious nation-building projects — and I\'m on the design team. As lead RC bridge designer across three highway packages, I\'m engineering the bridges that stitch Borneo together.',
    highlights: [
      'Lead designer for WP32, WP33 & WP35 bridge packages',
      'Post-tensioned LS Girder design for long-span crossings',
      'Slashed steel usage through poundage optimisation — ~20% cost saved',
      'Coordinating drawings end-to-end to keep delivery on schedule',
    ],
    metrics: [{value:'~20% Cost Savings',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'},{value:'Nation-Scale',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-orange-900/50 to-gray-800', border: 'border-orange-500/35',
  },
  {
    id: 'grandhill', name: 'Grandhill Genting Highlands', category: ['Bridge Design','All'],
    location: 'Genting Highlands', year: 'Jul 2025–Present',
    description: 'High-altitude, high-stakes — a landmark mixed development perched above the clouds needs infrastructure that matches its ambition. I designed the bridge and retaining wall system from ground up.',
    highlights: [
      'Full sub- & superstructure design via STRAP modelling',
      'Post-tensioned T-Beam girders for the feature approach span',
      'RCC counterfort wall to hold back the Genting hillside',
      'On-call contractor support resolving site issues in real time',
    ],
    metrics: [{value:'Integral Bridge',color:'text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25'},{value:'PT T-Beam',color:'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25'}],
    gradient: 'from-emerald-900/40 to-gray-800', border: 'border-emerald-500/35',
  },
  {
    id: 'jalan-yew', name: 'Jalan Yew–Sg. Besi Widening', category: ['Widening','All'],
    location: 'Kuala Lumpur', year: 'Jan 2024–Present',
    description: 'The original design was expensive and disruptive. We rethought it — proposing a post-tensioned Flex-C Girder solution that widened the KL flyover while keeping traffic moving and slicing costs by nearly a third.',
    highlights: [
      'Proposed & designed a smarter PT Flex-C Girder alternative',
      'Structural impact assessment during live beam launching',
      'Resolved contractor RFIs so work never ground to a halt',
      '~30% cost reduction vs. the original scheme',
    ],
    metrics: [{value:'~30% Cost Saving',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'},{value:'Live Traffic',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-teal-900/40 to-gray-800', border: 'border-teal-500/35',
  },
  {
    id: 'cameron', name: 'Cameron Highlands Bridge', category: ['Bridge Design','All'],
    location: 'Cameron Highlands', year: '2024',
    description: 'Brought in as an alternative design consultant when the first scheme was over budget. I rebuilt the bridge from scratch — lighter, leaner, and structurally sound — proving that smart engineering always finds a better way.',
    highlights: [
      'Engaged as alternative consultant to rescue an over-budget design',
      'Redesigned superstructure to use less steel, same load capacity',
      'Optimised substructure to match challenging highland terrain',
      'Delivered full coordinated drawings for contractor handover',
    ],
    metrics: [{value:'Alt. Consultant',color:'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25'},{value:'Cost Rescued',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'}],
    gradient: 'from-amber-900/35 to-gray-800', border: 'border-amber-500/35',
  },
  {
    id: 'palekbang', name: 'Palekbang Cable-Stayed Bridge', category: ['Bridge Design','All'],
    location: 'Kelantan', year: '2024',
    description: 'Cable-stayed bridges are the icons of modern infrastructure — and the approach spans are where structural precision is most critical. I designed both the PT T-Beam and LS Girder approaches to integrate seamlessly with the main cable span.',
    highlights: [
      'PT T-Beam approach span designed to match cable-stay loads',
      'LS Girder solution for the secondary approach — optimised for depth',
      'Full bridge model in STRAP to verify structural continuity',
      'Tight coordination with the main cable-stayed superstructure team',
    ],
    metrics: [{value:'Cable-Stayed',color:'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/25'},{value:'Dual Span Types',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-violet-900/35 to-gray-800', border: 'border-violet-500/35',
  },
  {
    id: 'pelubang', name: 'Pelubang WTP Pipe Crossings', category: ['Infrastructure','All'],
    location: 'Selangor', year: '2024',
    description: 'Not every bridge carries cars — these 11 carry water. Serving a critical treatment plant corridor in Selangor, I designed all 11 pipe-crossing structures from pile to parapet, then fought the tender to win it ~40% under budget.',
    highlights: [
      'Designed 11 independent bridge structures from first principles',
      'Full pile and foundation design with site-specific soil data',
      'Interpreted geotechnical reports to drive safe, economical foundations',
      '~40% under the budget estimate — tender won on our numbers',
    ],
    metrics: [{value:'~40% Cost Saving',color:'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/25'},{value:'11 Structures',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'}],
    gradient: 'from-cyan-900/35 to-gray-800', border: 'border-cyan-500/35',
  },
  {
    id: 'm-nova', name: 'M-Nova Mixed Development', category: ['Bridge Design','All'],
    location: 'Malaysia', year: '2023',
    description: 'Urban development bridges have to be functional and fit their surroundings. The M-Nova project demanded two distinct bridge types — a slip-in connection bridge and a junction bridge — both designed and detailed from scratch.',
    highlights: [
      'Slip-in connection bridge: designed for seamless structural integration',
      'Junction bridge: geometry and loading unique to the development layout',
      'Full prestressed concrete detailing — drawings ready for tender',
      'Responded to every client technical query, closing the review loop fast',
    ],
    metrics: [{value:'PS Concrete',color:'text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/25'},{value:'Dual Bridge Types',color:'text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/25'}],
    gradient: 'from-blue-900/35 to-gray-800', border: 'border-blue-500/35',
  },
  {
    id: 'skve', name: 'SKVE Highway Flyover', category: ['Bridge Design','All'],
    location: 'Selangor', year: '2023',
    description: 'The SKVE is one of Selangor\'s key expressways — its crossing flyover needed to be strong, economical, and buildable fast. I took ownership of the full structural package: crosshead, abutments, and piles, all optimised end to end.',
    highlights: [
      'Full crosshead design — sized for heavy expressway loading',
      'Abutment design with transition slab detailing',
      'Pile design and capacity checks for layered soil conditions',
      'Structural optimisation reduced material quantities across the board',
    ],
    metrics: [{value:'Expressway',color:'text-amber-600 dark:text-amber-400 bg-amber-500/10 border-amber-500/25'},{value:'Full Package',color:'text-orange-400 bg-orange-500/10 border-orange-500/25'}],
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
