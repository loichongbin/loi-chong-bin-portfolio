'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, ArrowUp, Download } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-900 border-t border-gray-800/80">
      {/* Warning stripe top */}
      <div className="h-0.5 warning-stripe opacity-50" />

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center glow-orange-sm">
                <span className="text-white font-bold text-sm font-mono">LCB</span>
              </div>
              <div>
                <div className="text-white font-semibold">Loi Chong Bin</div>
                <div className="text-xs text-gray-500 font-mono">Structural Design Engineer</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Bridge design engineer delivering cost-effective, standards-compliant RC and prestressed
              concrete bridge infrastructure across Malaysia.
            </p>
            <div className="flex items-center gap-2">
              <a href="https://www.linkedin.com/in/loi-chong-bin" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-500 hover:text-sky-400 hover:bg-sky-500/10 border border-gray-800 hover:border-sky-500/30 transition-all" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="mailto:loichongbin@gmail.com"
                className="p-2 rounded-lg text-gray-500 hover:text-orange-400 hover:bg-orange-500/10 border border-gray-800 hover:border-orange-500/30 transition-all" aria-label="Email">
                <Mail size={16} />
              </a>
              <a href="/resume.pdf" download="LoiChongBin_Resume.pdf"
                className="p-2 rounded-lg text-gray-500 hover:text-emerald-400 hover:bg-emerald-500/10 border border-gray-800 hover:border-emerald-500/30 transition-all" aria-label="Download Resume">
                <Download size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-5">Navigation</h3>
            <ul className="space-y-2.5">
              {[['#about','About Me'],['#skills','Technical Expertise'],['#projects','Featured Projects'],['#impact','Project Impact'],['#timeline','Engineering Journey'],['#site-experience','Field Experience'],['#contact','Contact']].map(([href,label]) => (
                <li key={href}>
                  <a href={href} className="text-sm text-gray-500 hover:text-orange-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-5">Get in Touch</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:loichongbin@gmail.com" className="flex items-start gap-3 text-sm text-gray-500 hover:text-orange-400 transition-colors">
                  <Mail size={14} className="mt-0.5 flex-shrink-0 text-orange-500" />
                  loichongbin@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+601836891889" className="flex items-start gap-3 text-sm text-gray-500 hover:text-orange-400 transition-colors">
                  <Phone size={14} className="mt-0.5 flex-shrink-0 text-orange-500" />
                  +60 18-369 1889
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/loi-chong-bin" target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-gray-500 hover:text-sky-400 transition-colors">
                  <Linkedin size={14} className="mt-0.5 flex-shrink-0 text-sky-500" />
                  linkedin.com/in/loi-chong-bin
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-orange-500" />
                Subang Jaya, Selangor, Malaysia
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-gray-800 border border-gray-700">
              <div className="text-[10px] text-gray-500 font-mono mb-1">Current Employer</div>
              <div className="text-sm font-semibold text-white">OSD Consultants</div>
              <div className="text-xs text-gray-500 mt-0.5">Ara Damansara, Petaling Jaya · Feb 2023 – Present</div>
              <div className="text-xs text-gray-400 mt-1">BEng (Hons) Civil · Monash University Malaysia (H2A)</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 font-mono">© {new Date().getFullYear()} Loi Chong Bin. All rights reserved.</p>
          <button onClick={scrollToTop} className="flex items-center gap-2 text-xs text-gray-600 hover:text-orange-400 transition-colors group">
            Back to top
            <span className="p-1 rounded bg-gray-800 group-hover:bg-orange-500/20 transition-colors"><ArrowUp size={10} /></span>
          </button>
        </div>
      </div>
    </footer>
  )
}
