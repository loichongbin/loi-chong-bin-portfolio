'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckCircle2, ClipboardCheck, Layers, HardHat } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const sites = [
  {
    id: 'pontian',
    location: 'Sungai Pontian Kechil Bridge',
    region: 'Johor, Malaysia',
    type: 'RC Bridge — Reinforcement Inspection',
    icon: Layers,
    accent: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-500/25',
    bg: 'bg-orange-500/6',
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    activities: [
      'Reinforcement layout verification against approved drawings',
      'LS Girder positioning and installation inspection',
      'Rebar spacing and lapping length compliance checks',
      'Construction quality assurance and workmanship assessment',
      'Shop drawing review and site coordination',
      'Progress monitoring and documentation',
    ],
    highlight: 'Rebar verification, LS Girder inspection and QA/QC for major RC bridge',
  },
  {
    id: 'sepang',
    location: 'Sepang Site Inspection',
    region: 'Selangor, Malaysia',
    type: 'Infrastructure — Progress Monitoring',
    icon: ClipboardCheck,
    accent: 'text-sky-600 dark:text-sky-400',
    border: 'border-sky-500/25',
    bg: 'bg-sky-500/6',
    iconBg: 'bg-sky-500/10 border-sky-500/20',
    activities: [
      'Overall construction progress monitoring',
      'Workmanship quality assessment',
      'Contractor coordination and site query resolution',
      'Structural compliance verification on site',
      'Site issue identification and design resolution',
      'Inspection report preparation',
    ],
    highlight: 'Construction progress monitoring and multi-party contractor coordination',
  },
  {
    id: 'general',
    location: 'Cross-Site QA / Construction Support',
    region: 'Various Locations, Malaysia',
    type: 'RFI Resolution · Beam Launching · Shop Drawing Review',
    icon: HardHat,
    accent: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-500/25',
    bg: 'bg-amber-500/6',
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    activities: [
      'Beam launching sequence coordination and oversight',
      'Shop drawing technical review and approval',
      'RFI (Request for Information) resolution with feasible solutions',
      'Construction issue identification and engineering response',
      'Pre-pour and post-pour structural checks',
      'Reinforcement bar inspection for compliance',
    ],
    highlight: 'RFI resolution, beam launching support, and cross-site construction engineering',
  },
]

const container = { hidden:{opacity:0}, visible:{opacity:1,transition:{staggerChildren:0.11,delayChildren:0.05}} }
const card      = { hidden:{opacity:0,y:26}, visible:{opacity:1,y:0,transition:{duration:0.6,ease:'easeOut'}} }

export function SiteExperience() {
  return (
    <section id="site-experience" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Field Experience"
          title="Engineering Beyond"
          titleAccent="the Drawing Board"
          description="Site inspection, construction support, and quality assurance — translating structural design intent into field reality at OSD Consultants."
          centered
          className="mb-16"
        />

        <motion.div
          variants={container} initial="hidden" whileInView="visible" viewport={{once:true,margin:'-60px'}}
          className="grid md:grid-cols-3 gap-6"
        >
          {sites.map(site => {
            const Icon = site.icon
            return (
              <motion.div
                key={site.id}
                variants={card}
                whileHover={{ y:-5, transition:{duration:0.22} }}
                className={`group rounded-2xl overflow-hidden border bg-white dark:bg-gray-900 border-stone-200 dark:border-gray-800 hover:${site.border} hover:shadow-card-lift dark:hover:shadow-card-lift-dark transition-all duration-300`}
              >
                {/* Blueprint-style photo placeholder */}
                <div className={`relative h-44 ${site.bg} border-b ${site.border} overflow-hidden`}>
                  {/* Blueprint grid overlay */}
                  <div className="absolute inset-0 engineering-grid-light dark:engineering-grid-fine opacity-80" />

                  {/* Warning stripe at top of image */}
                  <div className="absolute top-0 left-0 right-0 h-1 warning-stripe opacity-40" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className={`w-16 h-16 rounded-2xl border-2 ${site.border} ${site.iconBg} flex items-center justify-center`}>
                      <Icon size={28} className={site.accent} />
                    </div>
                    <div className="text-center px-4">
                      <div className="text-[10px] font-mono text-gray-400">[ Field Photo Placeholder ]</div>
                      <div className={`text-xs font-bold mt-1 ${site.accent}`}>{site.type}</div>
                    </div>
                  </div>

                  <div className={`absolute top-3 left-3 px-2 py-1 text-[10px] font-bold font-mono rounded-lg ${site.bg} ${site.border} border ${site.accent}`}>
                    FIELD
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <MapPin size={12} className={site.accent} />
                      <span className="text-xs text-gray-500">{site.region}</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">{site.location}</h3>
                    <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{site.highlight}</p>
                  </div>

                  <ul className="space-y-2">
                    {site.activities.map(a => (
                      <li key={a} className="flex items-start gap-2.5">
                        <CheckCircle2 size={12} className={`${site.accent} flex-shrink-0 mt-0.5`} />
                        <span className="text-xs text-gray-600 dark:text-gray-400 leading-snug">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Certifications callout */}
        <motion.div
          initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-40px'}}
          transition={{duration:0.55,delay:0.25}}
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-orange-500/8 to-amber-500/5 border border-orange-500/20 flex flex-col sm:flex-row items-center gap-5"
        >
          <div className="w-12 h-12 rounded-xl bg-orange-500/12 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
            <HardHat size={22} className="text-orange-500" />
          </div>
          <div className="text-center sm:text-left">
            <div className="text-sm font-bold text-gray-900 dark:text-white">Site Access Certifications</div>
            <div className="text-xs text-gray-500 mt-1">
              Fully certified for Malaysian construction site access — qualified to conduct inspections, attend pre-pour checks, and coordinate field activities.
            </div>
          </div>
          <div className="sm:ml-auto flex flex-wrap gap-2 justify-center">
            {['Expressway Safety Passport', 'CIDB SICW'].map(c => (
              <span key={c} className="px-3 py-1.5 text-[10px] font-bold font-mono text-orange-500 bg-orange-500/10 border border-orange-500/25 rounded-lg whitespace-nowrap">
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
