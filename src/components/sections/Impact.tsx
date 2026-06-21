'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Building2, Layers, HardHat, Award, CheckCircle2 } from 'lucide-react'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { SectionHeader } from '../ui/SectionHeader'

const mainStats = [
  {
    value: 10, suffix: '+',
    label: 'Projects Delivered',
    sub: 'Major infrastructure projects',
    icon: Building2,
    accent: 'text-orange-500', bg: 'bg-orange-500/12', border: 'border-orange-500/25',
    glow: 'hover:shadow-[0_0_36px_rgba(249,115,22,0.18)]',
  },
  {
    value: 40, suffix: '%', prefix: 'Up to ',
    label: 'Cost Savings Achieved',
    sub: 'Through structural optimization',
    icon: TrendingDown,
    accent: 'text-emerald-500', bg: 'bg-emerald-500/12', border: 'border-emerald-500/25',
    glow: 'hover:shadow-[0_0_36px_rgba(16,185,129,0.18)]',
  },
  {
    value: 6, suffix: '',
    label: 'Bridge Types Designed',
    sub: 'RC, PC, Integral, Cable-Stayed & more',
    icon: Layers,
    accent: 'text-sky-500', bg: 'bg-sky-500/12', border: 'border-sky-500/25',
    glow: 'hover:shadow-[0_0_36px_rgba(14,165,233,0.18)]',
  },
  {
    value: 3, suffix: '+',
    label: 'Years of Experience',
    sub: 'At OSD Consultants, PJ',
    icon: HardHat,
    accent: 'text-amber-500', bg: 'bg-amber-500/12', border: 'border-amber-500/25',
    glow: 'hover:shadow-[0_0_36px_rgba(245,158,11,0.18)]',
  },
]

const savings = [
  { project: 'Pan Borneo Highway (WP32/33/35)', pct: 20, color: 'bg-orange-500' },
  { project: 'Jalan Yew–Sungai Besi Widening',  pct: 30, color: 'bg-amber-500' },
  { project: 'Pelubang WTP Pipe Crossing',       pct: 40, color: 'bg-emerald-500' },
]

const bridgeTypes = [
  'Integral Bridges', 'Flyover Widening', 'Pipe Crossing Bridges',
  'Cable-Stayed Approaches', 'RC Bridge Design', 'Prestressed Concrete',
  'Post-Tensioned Beams', 'Slip-In Connection Bridges',
]

const container = { hidden:{opacity:0}, visible:{opacity:1, transition:{staggerChildren:0.09, delayChildren:0.05}} }
const item      = { hidden:{opacity:0,y:18}, visible:{opacity:1,y:0,transition:{duration:0.55, ease:'easeOut'}} }

export function Impact() {
  return (
    <section id="impact" className="section-padding bg-gray-900 dark:bg-gray-900 relative overflow-hidden">
      {/* Construction orange grid */}
      <div className="absolute inset-0 engineering-grid opacity-70" />
      {/* Warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full bg-orange-600/8 blur-[100px] pointer-events-none" />

      {/* Warning stripe top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 warning-stripe opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Project Impact"
          title="Numbers That"
          titleAccent="Tell the Story"
          description="Measurable engineering value delivered across Malaysia's infrastructure landscape."
          centered
          light
          className="mb-16"
        />

        {/* Main stats */}
        <motion.div
          variants={container} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {mainStats.map(s => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                variants={item}
                whileHover={{ y:-4, transition:{duration:0.2} }}
                className={`p-6 rounded-2xl border bg-gray-800/70 backdrop-blur-sm transition-all duration-300 ${s.border} ${s.glow}`}
              >
                <div className={`w-10 h-10 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mb-4`}>
                  <Icon size={18} className={s.accent} />
                </div>
                <div className={`text-4xl sm:text-5xl font-black font-mono tabular-nums ${s.accent}`}>
                  {'prefix' in s && <span className="text-base font-semibold text-gray-500">{s.prefix}</span>}
                  <AnimatedCounter from={0} to={s.value} suffix={s.suffix} duration={2} />
                </div>
                <div className="text-sm font-semibold text-white mt-2">{s.label}</div>
                <div className="text-xs text-gray-500 mt-1">{s.sub}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Lower row */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Savings bar chart */}
          <motion.div
            initial={{opacity:0,x:-22}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-60px'}}
            transition={{duration:0.65}}
            className="p-7 rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/12 border border-emerald-500/25 flex items-center justify-center">
                <TrendingDown size={16} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Cost Savings by Project</div>
                <div className="text-xs text-gray-500">Construction cost reductions delivered</div>
              </div>
            </div>
            <div className="space-y-5">
              {savings.map((s, i) => (
                <div key={s.project}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-400 font-medium">{s.project}</span>
                    <span className="text-xs font-bold font-mono text-emerald-400">~{s.pct}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-gray-700 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${s.color}`}
                      initial={{width:0}}
                      whileInView={{width:`${s.pct}%`}}
                      viewport={{once:true}}
                      transition={{duration:1.3, delay:i*0.18, ease:'easeOut'}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bridge types */}
          <motion.div
            initial={{opacity:0,x:22}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:'-60px'}}
            transition={{duration:0.65}}
            className="p-7 rounded-2xl border border-gray-700 bg-gray-800/70 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-xl bg-orange-500/12 border border-orange-500/25 flex items-center justify-center">
                <Building2 size={16} className="text-orange-400" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Bridge Types Designed</div>
                <div className="text-xs text-gray-500">Structural typologies across all projects</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {bridgeTypes.map((bt, i) => (
                <motion.div
                  key={bt}
                  initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}}
                  transition={{delay:i*0.06, duration:0.4}}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-700/60 border border-gray-600/60"
                >
                  <CheckCircle2 size={12} className="text-orange-400 flex-shrink-0" />
                  <span className="text-xs text-gray-300 font-medium leading-snug">{bt}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-amber-500/8 border border-amber-500/20">
              <Award size={15} className="text-amber-400 flex-shrink-0" />
              <span className="text-xs text-amber-300">
                Alternative design solutions adopted by clients on Cameron Bridge, Pelubang WTP & Jalan Yew Widening
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
