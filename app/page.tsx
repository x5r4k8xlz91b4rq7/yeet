import Hero from '@/components/hero'
import Services from '@/components/services'
import Contact from '@/components/contact'
import AiThumbsScroll from '@/components/ai-thumbs-scroll'
import SecurityMarqueeDemo from '@/components/security-marquee'
import SuccessStories from '@/components/success-stories'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <AiThumbsScroll />
      <SuccessStories />
      <SecurityMarqueeDemo />
      <Contact />
    </div>
  )
}