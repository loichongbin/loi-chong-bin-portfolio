'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Send, Download, CheckCircle2, Loader2 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { cn } from '@/lib/utils'

const inquiryOptions = [
  'Bridge Design Project', 'Structural Analysis', 'Alternative Design Review',
  'Project Coordination', 'Construction Support / RFI', 'General Enquiry',
]

interface FormState { name:string; company:string; email:string; inquiry:string; message:string }

export function Contact() {
  const [form, setForm] = useState<FormState>({ name:'', company:'', email:'', inquiry:'', message:'' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle')
  const [focused, setFocused] = useState<string|null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xdarnbzo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      })
      if (res.ok) {
        setStatus('sent')
      } else {
        setStatus('idle')
        alert('Something went wrong. Please email me directly at loichongbin@gmail.com')
      }
    } catch {
      setStatus('idle')
      alert('Something went wrong. Please email me directly at loichongbin@gmail.com')
    }
  }

  const base = 'w-full px-4 py-3 text-sm bg-stone-50 dark:bg-gray-800/70 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-all duration-200'
  const cls  = (f:string) => cn(base, focused === f ? 'border-orange-500 ring-2 ring-orange-500/15 bg-white dark:bg-gray-800' : 'border-stone-200 dark:border-gray-700')

  return (
    <section id="contact" className="section-padding bg-stone-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 engineering-dots opacity-50 dark:opacity-80" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something"
          titleAccent="Together"
          description="Bridge project, structural review, or exploring collaboration — I'd love to hear from you."
          centered
          className="mb-16"
        />

        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity:0, x:-22 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ duration:0.65, ease:'easeOut' }}
          >
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center text-center py-20">
                <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:'spring',stiffness:200,damping:14}}
                  className="w-20 h-20 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 size={36} className="text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Message Received!</h3>
                <p className="text-gray-500 max-w-sm">
                  Thank you for reaching out. I'll respond within 24–48 hours.
                </p>
                <button onClick={() => setStatus('idle')} className="mt-8 px-6 py-2.5 text-sm font-medium text-orange-600 dark:text-orange-400 border border-orange-500/30 rounded-xl hover:bg-orange-500/10 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Full Name <span className="text-orange-500">*</span></label>
                    <input type="text" name="name" required placeholder="John Smith" value={form.name}
                      onChange={onChange} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} className={cls('name')} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company</label>
                    <input type="text" name="company" placeholder="AECOM Malaysia" value={form.company}
                      onChange={onChange} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)} className={cls('company')} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email <span className="text-orange-500">*</span></label>
                  <input type="email" name="email" required placeholder="john@company.com" value={form.email}
                    onChange={onChange} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} className={cls('email')} />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Inquiry Type <span className="text-orange-500">*</span></label>
                  <select name="inquiry" required value={form.inquiry}
                    onChange={onChange} onFocus={() => setFocused('inquiry')} onBlur={() => setFocused(null)} className={cn(cls('inquiry'),'cursor-pointer')}>
                    <option value="" disabled>Select inquiry type...</option>
                    {inquiryOptions.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message <span className="text-orange-500">*</span></label>
                  <textarea name="message" required rows={5} placeholder="Tell me about your project, timeline, or how I can help..."
                    value={form.message} onChange={onChange} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    className={cn(cls('message'),'resize-none')} />
                </div>

                <motion.button type="submit" disabled={status==='sending'}
                  whileHover={{scale:1.01}} whileTap={{scale:0.99}}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/60 text-white font-bold rounded-xl shadow-glow-orange-sm hover:shadow-glow-orange transition-all duration-200">
                  {status==='sending' ? <><Loader2 size={18} className="animate-spin" />Sending...</> : <><Send size={16} />Send Message</>}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity:0, x:22 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:'-60px' }}
            transition={{ duration:0.65, ease:'easeOut' }}
            className="space-y-4"
          >
            {/* Contact info */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-800 space-y-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono">Direct Contact</div>
              {[
                { icon:Mail,  href:'mailto:loichongbin@gmail.com', label:'Email', value:'loichongbin@gmail.com', color:'text-orange-500' },
                { icon:Phone, href:'tel:+601836891889', label:'Phone', value:'+60 18-369 1889', color:'text-orange-500' },
                { icon:Linkedin, href:'https://www.linkedin.com/in/loi-chong-bin', label:'LinkedIn', value:'loi-chong-bin', color:'text-sky-500' },
              ].map(c => {
                const Icon = c.icon
                return (
                  <a key={c.label} href={c.href} target={c.label==='LinkedIn'?'_blank':undefined} rel="noopener noreferrer"
                    className="flex items-center gap-3.5 group">
                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all', 'bg-stone-100 dark:bg-gray-800 border-stone-200 dark:border-gray-700 group-hover:border-orange-300 dark:group-hover:border-orange-500/40')}>
                      <Icon size={16} className={c.color} />
                    </div>
                    <div>
                      <div className="text-[10px] text-gray-400 uppercase font-mono">{c.label}</div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{c.value}</div>
                    </div>
                  </a>
                )
              })}
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-gray-800 border border-stone-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Location</div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Subang Jaya, Selangor, Malaysia</div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-stone-200 dark:border-gray-800 space-y-2.5">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono mb-4">Connect</div>
              <a href="https://www.linkedin.com/in/loi-chong-bin" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/25 text-[#0A66C2] dark:text-blue-400 font-semibold text-sm hover:bg-[#0A66C2]/20 transition-colors">
                <Linkedin size={17} /> View LinkedIn Profile
              </a>
              <a href="mailto:loichongbin@gmail.com"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-600 dark:text-orange-400 font-semibold text-sm hover:bg-orange-500/20 transition-colors">
                <Mail size={17} /> Send Email Directly
              </a>
              <a href="/resume.pdf" download="LoiChongBin_Resume.pdf"
                className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-stone-100 dark:bg-gray-800 border border-stone-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold text-sm hover:border-orange-400/40 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <Download size={17} /> Download Resume / CV
              </a>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/8 to-transparent border border-orange-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-bold text-emerald-500 font-mono">Available</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Responds within 24–48 hours. Open to bridge design projects, structural consultancy, and engineering collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
