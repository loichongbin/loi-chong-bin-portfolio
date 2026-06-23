'use client'

import { motion } from 'framer-motion'
import { Building2, Activity, Users, Code2, Globe, CheckCircle2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const skillCategories = [
  {
    id: 'bridge',
    icon: Building2,
    title: 'Bridge Engineering',
    color: 'orange',
    accent: 'text-orange-600 dark:text-orange-400',
    bg:     'bg-orange-500/8  dark:bg-orange-500/12',
    border: 'border-orange-500/20',
    hover:  'hover:border-orange-500/50 hover:shadow-[0_0_28px_rgba(249,115,22,0.1)]',
    iconBg: 'bg-orange-500/12',
    skills: [
      'RC Bridge Design (BS5400 / Eurocode)',
      'Prestressed Concrete Design',
      'Post-Tensioned T-Beam & LS Girder',
      'Bridge Widening Design',
      'Integral Bridge Design',
      'Cable-Stayed Approach Structures',
      'Flyover Design',
      'Pipe Crossing Bridges',
    ],
  },
  {
    id: 'structural',
    icon: Activity,
    title: 'Structural Analysis',
    color: 'sky',
    accent: 'text-sky-600 dark:text-sky-400',
    bg:     'bg-sky-500/8  dark:bg-sky-500/12',
    border: 'border-sky-500/20',
    hover:  'hover:border-sky-500/50 hover:shadow-[0_0_28px_rgba(14,165,233,0.1)]',
    iconBg: 'bg-sky-500/12',
    skills: [
      'STRAP Software Modelling',
      'MIDAS Civil Analysis',
      'ADSEC Section Analysis',
      '3D Structural Modelling',
      'Load Assessment & Combinations',
      'Reinforcement Design & Detailing',
      'Poundage Optimization',
      'Quantity Take-Offs & Cost Estimation',
    ],
  },
  {
    id: 'coordination',
    icon: Users,
    title: 'Project Coordination',
    color: 'emerald',
    accent: 'text-emerald-600 dark:text-emerald-400',
    bg:     'bg-emerald-500/8  dark:bg-emerald-500/12',
    border: 'border-emerald-500/20',
    hover:  'hover:border-emerald-500/50 hover:shadow-[0_0_28px_rgba(16,185,129,0.1)]',
    iconBg: 'bg-emerald-500/12',
    skills: [
      'Drawing Coordination (AutoCAD / ZWCAD)',
      'Shop Drawing Review & Approval',
      'RFI Review & Technical Responses',
      'Work Method Statement Review',
      'Contractor Coordination',
      'Site Inspection & QA/QC',
      'Beam Launching Coordination',
      'Design-Construction Issue Resolution',
    ],
  },
  {
    id: 'software',
    icon: Code2,
    title: 'Software & Tools',
    color: 'violet',
    accent: 'text-violet-600 dark:text-violet-400',
    bg:     'bg-violet-500/8  dark:bg-violet-500/12',
    border: 'border-violet-500/20',
    hover:  'hover:border-violet-500/50 hover:shadow-[0_0_28px_rgba(139,92,246,0.1)]',
    iconBg: 'bg-violet-500/12',
    skills: [
      'STRAP · MIDAS Civil · ADSEC',
      'Autodesk Structural Bridge Design · BEAMD',
      'SAFE · CROSSEC · Tekla Tedds',
      'SPACEGASS · ETABS · Prota · LUSAS',
      'AutoCAD · ZWCAD',
      'SketchUp · Revit',
      'ArcGIS · SIDRA',
      'Microsoft Office (Excel, Visio, PowerPoint)',
    ],
  },
  {
    id: 'standards',
    icon: Globe,
    title: 'Standards & Codes',
    color: 'amber',
    accent: 'text-amber-600 dark:text-amber-400',
    bg:     'bg-amber-500/8  dark:bg-amber-500/12',
    border: 'border-amber-500/20',
    hover:  'hover:border-amber-500/50 hover:shadow-[0_0_28px_rgba(245,158,11,0.1)]',
    iconBg: 'bg-amber-500/12',
    skills: [
      'British Standards BS5400 (Bridge Design)',
      'Eurocode (EN 1990 – EN 1994)',
      'JKR / PWD Malaysia Standards',
      'CIDB Safety Standards',
      'Load Assessment per Malaysian Code',
      'Materials & Structural Compliance',
    ],
  },
]

const languages = [
  { lang: 'English', level: 'Native', color: 'text-orange-600 dark:text-orange-400' },
  { lang: 'Chinese', level: 'Native', color: 'text-sky-600 dark:text-sky-400' },
  { lang: 'Malay',   level: 'Native', color: 'text-emerald-600 dark:text-emerald-400' },
]


const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const card = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25,0.46,0.45,0.94] } },
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-stone-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Blueprint-paper background */}
      <div className="absolute inset-0 engineering-grid-light dark:engineering-grid opacity-60 dark:opacity-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Full-Spectrum"
          titleAccent="Engineering Toolkit"
          description="From BS5400 bridge design to MIDAS modelling and site RFI resolution — the complete skill set that delivers infrastructure projects on time and under budget."
          centered
          className="mb-16"
        />

        {/* Warning-stripe section divider */}
        <div className="mb-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-stone-200 dark:bg-gray-800" />
          <div className="h-3 w-24 rounded warning-stripe opacity-40" />
          <div className="flex-1 h-px bg-stone-200 dark:bg-gray-800" />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillCategories.map(cat => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.id}
                variants={card}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
                className={`group p-6 rounded-2xl border bg-white dark:bg-gray-900 transition-all duration-300 cursor-default ${cat.border} ${cat.hover}`}
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${cat.iconBg} ${cat.border} border flex items-center justify-center flex-shrink-0`}>
                    <Icon size={21} className={cat.accent} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{cat.title}</h3>
                    <div className={`text-[11px] font-mono ${cat.accent} opacity-70 mt-0.5`}>
                      {cat.skills.length} items
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {cat.skills.map((skill, i) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04, duration: 0.4 }}
                      className="flex items-center gap-2.5"
                    >
                      <CheckCircle2 size={12} className={`${cat.accent} flex-shrink-0 opacity-80`} />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom strip */}
        <div className="mt-8 max-w-sm">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="p-5 rounded-2xl bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-800"
          >
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-4">
              Languages
            </div>
            <div className="space-y-3">
              {languages.map(l => (
                <div key={l.lang} className="flex items-center justify-between">
                  <span className={`text-sm font-semibold ${l.color}`}>{l.lang}</span>
                  <span className="px-2.5 py-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="mt-5 pt-4 border-t border-stone-200 dark:border-gray-800">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-3">Leadership</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-gray-800 dark:text-gray-200">Secretary</span>
                {' '}— Monash Athletics Club{' '}
                <span className="text-xs text-gray-400 font-mono">(Jan 2022 – Oct 2022)</span>
              </div>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                Managed secretarial duties, meeting coordination, and coached athletes for the Kawan Athletics Competition.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
