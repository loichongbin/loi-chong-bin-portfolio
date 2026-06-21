'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#about',           label: 'About' },
  { href: '#skills',          label: 'Expertise' },
  { href: '#projects',        label: 'Projects' },
  { href: '#impact',          label: 'Impact' },
  { href: '#timeline',        label: 'Journey' },
  { href: '#site-experience', label: 'Field' },
  { href: '#contact',         label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { theme, setTheme }         = useTheme()
  const [mounted, setMounted]       = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
      const ids = navLinks.map(l => l.href.replace('#',''))
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id); break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrolledLight = 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-stone-200/80 dark:border-gray-800/80 shadow-sm'
  const scrolledNone  = 'bg-transparent'

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25,0.46,0.45,0.94] }}
      className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-500', scrolled ? scrolledLight : scrolledNone)}
    >
      {/* Top warning stripe — always visible */}
      <div className="h-0.5 warning-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center glow-orange-sm group-hover:glow-orange transition-all duration-300">
              <span className="text-white font-bold text-xs font-mono tracking-wider">LCB</span>
            </div>
            <div className="hidden sm:block">
              <div className={cn('text-sm font-semibold transition-colors', scrolled ? 'text-gray-900 dark:text-white' : 'text-white')}>
                Loi Chong Bin
              </div>
              <div className={cn('text-[10px] font-mono transition-colors', scrolled ? 'text-gray-500 dark:text-gray-400' : 'text-orange-300/80')}>
                Structural Engineer · OSD Consultants
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => {
              const id = link.href.replace('#','')
              const isActive = activeSection === id
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    isActive
                      ? 'text-orange-500 dark:text-orange-400'
                      : scrolled
                        ? 'text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800/60'
                        : 'text-gray-300 hover:text-white hover:bg-white/8'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span layoutId="nav-dot" className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={cn(
                  'p-2 rounded-lg transition-all duration-200',
                  scrolled ? 'text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-white/10'
                )}
                aria-label="Toggle theme"
              >
                <motion.div initial={false} animate={{ rotate: theme === 'dark' ? 0 : 180 }} transition={{ duration: 0.3 }}>
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </motion.div>
              </button>
            )}

            {/* Download Resume — always visible on desktop */}
            <a
              href="/resume.pdf"
              download="LoiChongBin_Resume.pdf"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-400 text-white rounded-lg shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-200"
            >
              <Download size={14} />
              Resume
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn('lg:hidden p-2 rounded-lg transition-all', scrolled ? 'text-gray-500 dark:text-gray-400 hover:bg-stone-100 dark:hover:bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-white/10')}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen
                  ? <motion.div key="close" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}} transition={{duration:0.15}}><X size={20}/></motion.div>
                  : <motion.div key="open"  initial={{rotate:90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}} transition={{duration:0.15}}><Menu size={20}/></motion.div>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity:0, height:0 }}
            animate={{ opacity:1, height:'auto' }}
            exit={{ opacity:0, height:0 }}
            transition={{ duration:0.25, ease:'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-stone-200 dark:border-gray-800"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link,i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity:0, x:-16 }}
                  animate={{ opacity:1, x:0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-800/50 rounded-xl transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500 opacity-60" />
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-3 mt-3 border-t border-stone-200 dark:border-gray-800 flex gap-2">
                <a href="#contact" onClick={() => setMobileOpen(false)} className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold bg-orange-500 hover:bg-orange-400 text-white rounded-xl transition-colors">
                  Contact Me
                </a>
                <a href="/resume.pdf" download="LoiChongBin_Resume.pdf" className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 border border-stone-200 dark:border-gray-700 rounded-xl hover:border-orange-500/40 transition-colors">
                  <Download size={14} /> CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
