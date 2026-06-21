'use client'

import { motion } from 'framer-motion'
import { Cpu, Bot, BarChart3, Workflow, Globe, Zap, ArrowRight } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

function BriefcaseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="17"/><line x1="9" y1="14.5" x2="15" y2="14.5"/>
    </svg>
  )
}

const visions = [
  {
    icon: BriefcaseIcon,
    title: 'Project Engineering',
    tag: 'Leadership',
    color: 'orange',
    accent: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    description: 'Evolving from structural design into full project delivery — coordinating multidisciplinary teams, managing design schedules, and owning project outcomes end-to-end.',
  },
  {
    icon: Globe,
    title: 'Digital Engineering',
    tag: 'Innovation',
    color: 'sky',
    accent: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
    description: 'Embracing BIM workflows, digital twins, and integrated design environments to move beyond 2D CAD into data-rich, collaborative infrastructure delivery.',
  },
  {
    icon: Bot,
    title: 'Engineering Automation',
    tag: 'Efficiency',
    color: 'emerald',
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    description: 'Using Python and scripting to automate structural calculations, drawing generation, and report drafting — freeing engineer hours for high-value design thinking.',
  },
  {
    icon: Cpu,
    title: 'AI for Civil Engineering',
    tag: 'Technology',
    color: 'violet',
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    description: 'Exploring ML and AI for structural optimization, design checking, and data interpretation — augmenting engineering judgment with computational intelligence.',
  },
  {
    icon: Workflow,
    title: 'Workflow Optimization',
    tag: 'Process',
    color: 'amber',
    accent: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    description: 'Designing engineering workflows that reduce rework, improve review cycles, and enable faster, more accurate project delivery across any team size.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Design',
    tag: 'Analytics',
    color: 'rose',
    accent: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    description: 'Leveraging project data, parametric modelling, and structural performance analytics to make smarter, evidence-based design decisions from day one.',
  },
]

const roadmap = [
  { phase:'Now',    label:'RC & Prestressed Bridge Design · Structural Analysis', dot:'bg-orange-500' },
  { phase:'Near',   label:'Project Engineering Leadership · Design Management',   dot:'bg-amber-500' },
  { phase:'Future', label:'Digital Engineering · AI Integration',                 dot:'bg-sky-500' },
]

const container = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.08,delayChildren:0.05}} }
const card      = { hidden:{opacity:0,y:22}, visible:{opacity:1,y:0,transition:{duration:0.6,ease:'easeOut'}} }

export function FutureVision() {
  return (
    <section id="vision" className="section-padding bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 engineering-grid opacity-60" />
      <div className="absolute inset-0 warning-stripe opacity-[0.025]" />
      <div className="absolute top-0 right-0 w-[450px] h-[350px] rounded-full bg-orange-600/7 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-sky-600/6 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}
            className="inline-flex items-center gap-2 mb-4 text-xs font-bold font-mono tracking-widest uppercase text-orange-400">
            <span className="block w-6 h-px bg-current" />Future Vision<span className="block w-6 h-px bg-current" />
          </motion.div>
          <motion.h2 initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.08}}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Where{' '}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">Engineering</span>
            {' '}Meets{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">Technology</span>
          </motion.h2>
          <motion.p initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.15}}
            className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The future of infrastructure belongs to engineers who can design, lead, and leverage technology — I'm actively building toward all three.
          </motion.p>
        </div>

        {/* Roadmap */}
        <motion.div initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}}
          className="mt-10 mb-14 rounded-2xl overflow-hidden border border-gray-700 flex flex-col sm:flex-row">
          {roadmap.map((r, i) => (
            <div key={r.phase} className="flex-1 relative p-5 bg-gray-800/70">
              <div className="flex items-center gap-2.5 mb-2">
                <div className={`w-2.5 h-2.5 rounded-full ${r.dot}`} />
                <span className="text-[10px] font-bold font-mono text-gray-400 uppercase tracking-widest">{r.phase}</span>
              </div>
              <div className="text-sm font-semibold text-white">{r.label}</div>
              {i < roadmap.length - 1 && (
                <div className="hidden sm:flex absolute right-0 top-0 bottom-0 items-center">
                  <div className="w-px h-full bg-gray-700" />
                  <ArrowRight size={13} className="absolute -right-[6px] text-gray-600" />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Vision cards */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visions.map(v => {
            const Icon = v.icon
            return (
              <motion.div key={v.title} variants={card}
                whileHover={{y:-4,transition:{duration:0.2}}}
                className={`p-6 rounded-2xl border bg-gray-800/70 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/90 ${v.border}`}>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl ${v.bg} border ${v.border} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${v.accent}`} />
                  </div>
                  <span className={`px-2.5 py-1 text-[10px] font-bold font-mono rounded-lg ${v.bg} ${v.border} border ${v.accent}`}>{v.tag}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2.5">{v.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.25}}
          className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center gap-3 p-1.5 rounded-2xl bg-gray-800 border border-gray-700">
            <div className="px-5 py-3 text-sm text-gray-400">
              Interested in working together on future-focused infrastructure?
            </div>
            <a href="#contact"
              className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white text-sm font-bold rounded-xl shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-200 flex-shrink-0">
              <Zap size={14} />Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
