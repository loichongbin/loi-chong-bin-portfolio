import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Impact } from '@/components/sections/Impact'
import { Timeline } from '@/components/sections/Timeline'
import { SiteExperience } from '@/components/sections/SiteExperience'
import { FutureVision } from '@/components/sections/FutureVision'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Impact />
      <Timeline />
      <SiteExperience />
      <FutureVision />
      <Contact />
    </>
  )
}
