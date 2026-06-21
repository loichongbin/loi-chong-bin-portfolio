'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, BookOpen, CheckCircle2, MapPin, Calendar } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const workExperience = [
  {
    company: 'OSD Consultants',
    role: 'Structural Design Engineer',
    period: 'Feb 2023 – Present',
    location: 'Ara Damansara, Petaling Jaya',
    color: 'orange',
    accent: 'text-orange-600 dark:text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/8',
    dot: 'bg-orange-500',
    duties: [
      'Optimise the design of RC and prestressed concrete bridges across multiple projects, delivering cost-effective and construction-friendly designs',
      'Model reinforced and prestressed concrete bridges using STRAP and MIDAS Civil, conducting structural analysis with compliance to BS5400 and Eurocode',
      'Identify design-construction discrepancies during site inspections and propose practical solutions, reducing on-site rework',
      'Assess and review shop drawings, work method statements, and RFIs to maintain project quality and safety',
      'Deliver quantity take-offs and reinforcement poundage calculations supporting accurate cost estimations',
    ],
  },
  {
    company: 'OSD Consultants',
    role: 'Bridge Design Engineer (Intern)',
    period: 'Dec 2021 – Mar 2022',
    location: 'Ara Damansara, Petaling Jaya',
    color: 'sky',
    accent: 'text-sky-600 dark:text-sky-400',
    border: 'border-sky-500/30',
    bg: 'bg-sky-500/8',
    dot: 'bg-sky-500',
    duties: [
      'Supported senior engineers in developing design calculations, drawings and plans for RC bridge projects',
      'Conducted structural analysis of bridges using STRAP and ADSEC, providing results informing multiple bridge designs',
    ],
  },
]

const achievements = [
  "20% construction cost savings on Pan Borneo Highway through reinforcement optimization",
  "Led RC & PC bridge design for WP32, WP33, WP35 packages of Pan Borneo Highway",
  "Alternative design consultant for Cameron Bridge — re-engineered superstructure and substructure",
  "Designed 11 pipe-crossing structures for Pelubang WTP, achieving ~40% cost reduction",
  "Proficient in BS5400 and Eurocode bridge design standards",
  "Graduate Engineer registered with Board of Engineers Malaysia (BEM) since May 2023",
]

const collaborators = [
  'Project Engineers', 'Senior Structural Designers', 'AutoCAD/ZWCAD Drafters',
  'Site Contractors', 'QA/QC Inspectors', 'Clients & Consultants',
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}
const child = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_460px] gap-16 xl:gap-24 items-start">

          {/* ── Left: Story + Work Experience ── */}
          <div className="space-y-12">
            <SectionHeader
              eyebrow="About Me"
              title="Engineer Who Builds"
              titleAccent="with Purpose"
            />

            {/* Professional summary — direct from resume */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              <p>
                Bridge design engineer with three years of experience in structural analysis, project
                coordination, and technical design of <span className="text-orange-600 dark:text-orange-400 font-medium">reinforced concrete and prestressed bridges</span>.
                Proven record in cost-effective, standards-compliant infrastructure design with demonstrated
                capability in coordinating multidisciplinary teams for successful structural project delivery.
              </p>
              <p>
                Proficient in <span className="text-sky-600 dark:text-sky-400 font-medium">BS5400 and Eurocode bridge design</span>, registered as a Graduate Engineer with
                the Board of Engineers Malaysia (BEM), with a strong interest in applying RC and prestressed
                design expertise toward innovative and sustainable construction technologies.
              </p>
            </motion.div>

            {/* Key achievements */}
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-2.5"
            >
              {achievements.map((a, i) => (
                <motion.li key={i} variants={child} className="flex items-start gap-3">
                  <CheckCircle2 size={15} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{a}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Work Experience */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Work Experience</h3>
                <div className="flex-1 h-px bg-stone-200 dark:bg-gray-800" />
              </div>

              {workExperience.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative pl-5 border-l-2 ${job.border} space-y-3`}
                >
                  <div className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${job.dot}`} />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className={`text-sm font-bold ${job.accent}`}>{job.company}</div>
                      <div className="text-base font-semibold text-gray-900 dark:text-white">{job.role}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-mono">
                        <Calendar size={11} /> {job.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                        <MapPin size={11} /> {job.location}
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {job.duties.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${job.dot} opacity-60`} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Cards ── */}
          <div className="space-y-5">
            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-2xl bg-stone-50 dark:bg-gray-800 border border-stone-200 dark:border-gray-700 space-y-5"
            >
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Credentials</div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={19} className="text-orange-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">BEng Civil Engineering (Honours)</div>
                    <div className="text-xs text-gray-500 mt-0.5">Monash University Malaysia · Mar 2019 – Dec 2022</div>
                    <div className="text-xs text-orange-600 dark:text-orange-400 font-semibold mt-1">Second Upper Class Honours (H2A)</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={19} className="text-sky-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Graduate Engineer</div>
                    <div className="text-xs text-gray-500 mt-0.5">Board of Engineers Malaysia (BEM) · May 2023</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
                    <Briefcase size={19} className="text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">OSD Consultants</div>
                    <div className="text-xs text-gray-500 mt-0.5">Structural Design Engineer · Feb 2023 – Present</div>
                    <div className="text-xs text-gray-500">Ara Damansara, Petaling Jaya</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-stone-200 dark:border-gray-700 space-y-2">
                  {[
                    ['Expressway Operations Safety Passport', 'NIOSH+ · Dec 2025'],
                    ['Safety Induction Construction Workers (SICW)', 'CIDB Holdings · Feb 2023'],
                  ].map(([cert, issuer]) => (
                    <div key={cert} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-gray-700 dark:text-gray-300 font-medium">{cert}</div>
                        <div className="text-[10px] text-gray-400 font-mono">{issuer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FYP */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="p-6 rounded-2xl bg-stone-50 dark:bg-gray-800 border border-stone-200 dark:border-gray-700"
            >
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-4">Final Year Project</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Flood Vulnerability Index (FVI) for Critical Infrastructure in Mixed-Use Development
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Applied qualitative and quantitative research including focus group sessions to evaluate flood vulnerability
                indexes and created a flood vulnerability map using ArcGIS identifying critical infrastructure susceptible
                to flooding.
              </p>
            </motion.div>

            {/* Collaboration */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/8 to-amber-500/5 border border-orange-500/20"
            >
              <div className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest font-mono mb-4">I Work With</div>
              <div className="flex flex-wrap gap-2">
                {collaborators.map(c => (
                  <span key={c} className="px-3 py-1.5 text-xs font-medium text-orange-700 dark:text-orange-300 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <MapPin size={12} className="text-gray-400" />
                <span className="text-xs text-gray-500">Subang Jaya, Selangor, Malaysia</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
