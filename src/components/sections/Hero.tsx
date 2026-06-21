'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  Mail,
  ChevronDown,
  Award,
  HardHat,
  Building2,
  Linkedin,
} from 'lucide-react'
import { AnimatedCounter } from '../ui/AnimatedCounter'

// Cable-stayed bridge wireframe — orange-tinted for construction feel
function BridgeWireframe() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1400 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f97316" strokeWidth="0.35" strokeOpacity="0.1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#heroGrid)" />

      {/* Main bridge deck */}
      <path d="M 0 520 H 1400"    stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.18" />
      <path d="M 0 510 H 1400"    stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.06" />

      {/* Left pylon */}
      <path d="M 420 530 V 90"    stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.18" />
      <path d="M 398 125 H 442"   stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.14" />
      <path d="M 404 108 H 436"   stroke="#f97316" strokeWidth="1"   strokeOpacity="0.1"  />

      {/* Right pylon */}
      <path d="M 980 530 V 90"    stroke="#f97316" strokeWidth="2.5" strokeOpacity="0.18" />
      <path d="M 958 125 H 1002"  stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.14" />
      <path d="M 964 108 H 996"   stroke="#f97316" strokeWidth="1"   strokeOpacity="0.1"  />

      {/* Left pylon — cable stays */}
      {([110,145,178,210,242,272,300,326] as number[]).map((y,i) => (
        <g key={`l-${i}`}>
          <path d={`M 420 ${y} L ${Math.max(20,   420-(520-y)*1.05)} 520`} stroke="#f97316" strokeWidth="0.65" strokeOpacity="0.1" />
          <path d={`M 420 ${y} L ${Math.min(980,  420+(520-y)*1.05)} 520`} stroke="#0ea5e9" strokeWidth="0.65" strokeOpacity="0.1" />
        </g>
      ))}

      {/* Right pylon — cable stays */}
      {([110,145,178,210,242,272,300,326] as number[]).map((y,i) => (
        <g key={`r-${i}`}>
          <path d={`M 980 ${y} L ${Math.max(420,  980-(520-y)*1.05)} 520`} stroke="#0ea5e9" strokeWidth="0.65" strokeOpacity="0.1" />
          <path d={`M 980 ${y} L ${Math.min(1380, 980+(520-y)*1.05)} 520`} stroke="#f97316" strokeWidth="0.65" strokeOpacity="0.1" />
        </g>
      ))}

      {/* Pier supports */}
      {([200,700,1200] as number[]).map((x,i) => (
        <g key={`pier-${i}`}>
          <path d={`M ${x} 520 V 610`} stroke="#f97316" strokeWidth="1.8" strokeOpacity="0.12" />
          <path d={`M ${x-28} 606 H ${x+28}`} stroke="#f97316" strokeWidth="1.2" strokeOpacity="0.12" />
        </g>
      ))}
    </svg>
  )
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25,0.46,0.45,0.94] } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gray-900 flex flex-col justify-center overflow-hidden"
    >
      {/* Warning stripe accent band at very top */}
      <div className="absolute top-0 left-0 right-0 h-1 warning-stripe opacity-70" />

      {/* Bridge wireframe background */}
      <BridgeWireframe />

      {/* Gradient orbs — construction orange + steel blue */}
      <motion.div
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-orange-600/10 blur-[130px] pointer-events-none"
        animate={{ scale:[1,1.15,1], opacity:[0.5,0.7,0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full bg-sky-600/8 blur-[110px] pointer-events-none"
        animate={{ scale:[1.1,1,1.1], opacity:[0.3,0.5,0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-amber-500/6 blur-[90px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-center">

          {/* ─── LEFT: Copy ─── */}
          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-7">

            {/* Credential badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2.5 px-4 py-2 text-[11px] font-bold font-mono tracking-widest uppercase text-orange-400 bg-orange-500/12 border border-orange-500/30 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                Graduate Engineer · Board of Engineers Malaysia
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={item} className="space-y-0.5">
              <h1 className="text-[clamp(2.4rem,6.5vw,4.8rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white">
                Designing{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Bridges.
                </span>
              </h1>
              <h1 className="text-[clamp(2.4rem,6.5vw,4.8rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white">
                Optimizing
              </h1>
              <h1 className="text-[clamp(2.4rem,6.5vw,4.8rem)] font-extrabold leading-[1.05] tracking-[-0.025em]">
                <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                  Infrastructure.
                </span>
              </h1>
              <h1 className="text-[clamp(2.4rem,6.5vw,4.8rem)] font-extrabold leading-[1.05] tracking-[-0.025em] text-white">
                Building the{' '}
                <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                  Future.
                </span>
              </h1>
            </motion.div>

            {/* Sub */}
            <motion.p variants={item} className="text-lg text-gray-400 max-w-[520px] leading-relaxed">
              Bridge design engineer at{' '}
              <span className="text-orange-400 font-semibold">OSD Consultants</span> with 3 years
              of experience in RC & prestressed bridge design, structural analysis, and
              multidisciplinary project coordination across major Malaysian infrastructure.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-200 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download="LoiChongBin_Resume.pdf"
                className="flex items-center gap-2 px-7 py-3.5 bg-white/8 hover:bg-white/14 text-white font-semibold rounded-xl border border-white/15 hover:border-orange-500/40 transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
              <a
                href="https://www.linkedin.com/in/loi-chong-bin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 text-gray-400 hover:text-sky-400 font-medium transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 text-gray-400 hover:text-orange-400 font-medium transition-colors"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Profile visual ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.25,0.46,0.45,0.94] }}
            className="flex flex-col items-center gap-6"
          >
            {/* Profile frame */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-orange-500/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-orange-500/8" />

              {/* Image placeholder — swap for real photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-orange-500/30 flex items-center justify-center overflow-hidden glow-orange-sm">
                <div className="text-center">
                  <div className="text-5xl font-black text-gray-600 font-mono tracking-wider">LCB</div>
                  <div className="text-xs text-gray-600 mt-1 font-mono">Add profile.jpg</div>
                </div>
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
                />
              </div>

              {/* Floating badge — BEM */}
              <motion.div
                className="absolute -top-2 -right-8 px-3 py-2.5 bg-gray-800 border border-orange-500/35 rounded-2xl shadow-lg backdrop-blur-sm"
                animate={{ y:[-5,5,-5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-2">
                  <Award size={13} className="text-orange-400" />
                  <div>
                    <div className="text-[10px] font-bold text-orange-400 font-mono">BEM Grad.</div>
                    <div className="text-[9px] text-gray-500">May 2023</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — OSD */}
              <motion.div
                className="absolute -bottom-1 -left-12 px-3 py-2.5 bg-gray-800 border border-sky-500/30 rounded-2xl shadow-lg backdrop-blur-sm"
                animate={{ y:[5,-5,5] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              >
                <div className="flex items-center gap-2">
                  <Building2 size={13} className="text-sky-400" />
                  <div>
                    <div className="text-[10px] font-bold text-sky-400 font-mono">OSD Consultants</div>
                    <div className="text-[9px] text-gray-500">Feb 2023 – Present</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — Monash */}
              <motion.div
                className="absolute top-1/2 -right-16 -translate-y-1/2 px-3 py-2.5 bg-gray-800 border border-amber-500/30 rounded-2xl shadow-lg backdrop-blur-sm"
                animate={{ y:[-3,7,-3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
              >
                <div className="flex items-center gap-2">
                  <HardHat size={13} className="text-amber-400" />
                  <div>
                    <div className="text-[10px] font-bold text-amber-400 font-mono">Monash Univ.</div>
                    <div className="text-[9px] text-gray-500">H2A Honours</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Name card */}
            <div className="text-center">
              <div className="text-lg font-bold text-white tracking-tight">Loi Chong Bin</div>
              <div className="text-sm text-gray-400 font-mono mt-0.5">Structural Design Engineer</div>
              <div className="text-xs text-gray-500 font-mono mt-0.5">Subang Jaya, Selangor</div>
              <div className="flex items-center justify-center gap-2 mt-2.5">
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/12 border border-emerald-500/25 rounded-full">
                  Available for Projects
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-20 pt-10 border-t border-gray-800/60"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { value: 3, suffix: '+', label: 'Years Experience', accent: 'text-orange-400' },
              { value: 10, suffix: '+', label: 'Major Projects', accent: 'text-orange-400' },
              { text: 'Up to 40%', label: 'Cost Savings', accent: 'text-amber-400' },
              { text: 'BS5400 / EC', label: 'Design Standards', accent: 'text-sky-400' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                {'value' in s ? (
                  <div className={`text-3xl sm:text-4xl font-black font-mono ${s.accent}`}>
                    <AnimatedCounter from={0} to={s.value!} suffix={s.suffix} duration={2} />
                  </div>
                ) : (
                  <div className={`text-2xl sm:text-3xl font-black font-mono ${s.accent}`}>
                    {s.text}
                  </div>
                )}
                <div className="text-xs sm:text-sm text-gray-500 mt-1.5 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y:[0,9,0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1.5 text-gray-600">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </motion.div>
    </section>
  )
}
