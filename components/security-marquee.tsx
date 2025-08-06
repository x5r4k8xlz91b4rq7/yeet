"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  CheckCircle2, 
  AlertTriangle,
  Fingerprint,
  Key,
  Database,
  Globe,
  ArrowRight
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useMemo } from 'react'

const securityFeatures = [
  { icon: Shield, text: "End-to-End Encryption", color: "text-blue-400" },
  { icon: Lock, text: "Zero Trust Architecture", color: "text-green-400" },
  { icon: Eye, text: "Real-time Threat Detection", color: "text-purple-400" },
  { icon: Zap, text: "AI-Powered Defense", color: "text-yellow-400" },
  { icon: CheckCircle2, text: "GDPR Compliant", color: "text-emerald-400" },
  { icon: AlertTriangle, text: "Incident Response", color: "text-red-400" },
  { icon: Fingerprint, text: "Biometric Authentication", color: "text-pink-400" },
  { icon: Key, text: "Multi-Factor Security", color: "text-orange-400" },
  { icon: Database, text: "Secure Data Storage", color: "text-cyan-400" },
  { icon: Globe, text: "Global Security Standards", color: "text-indigo-400" },
]

const SecurityBadge = ({ icon: Icon, text, color }: { icon: any, text: string, color: string }) => (
  <div className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full whitespace-nowrap mx-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
    <Icon className={`h-5 w-5 ${color}`} />
    <span className="text-white font-medium">{text}</span>
  </div>
)

const SmoothMarquee = ({ items, direction = "left", speed = 30 }: { 
  items: typeof securityFeatures, 
  direction?: "left" | "right",
  speed?: number 
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  
  // Memoize the items array to prevent unnecessary re-renders
  const memoizedItems = useMemo(() => {
    if (!Array.isArray(items)) return []
    return items
  }, [JSON.stringify(items)])

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee || memoizedItems.length === 0) return

    let animationId: number
    let position = direction === "right" ? -marquee.scrollWidth / 2 : 0
    const scrollSpeed = direction === "left" ? -speed : speed
    let isActive = true

    const animate = () => {
      if (!isActive) return
      
      position += scrollSpeed / 60 // Convert speed to pixels per frame (60fps)
      
      // Reset position when content has completely scrolled off screen
      if (direction === "left" && position <= -marquee.scrollWidth / 2) {
        position = 0
      } else if (direction === "right" && position >= 0) {
        position = -marquee.scrollWidth / 2
      }
      
      marquee.style.transform = `translateX(${position}px)`
      if (isActive) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      isActive = false
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [speed, direction, memoizedItems.length])

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <div 
        ref={marqueeRef} 
        className="flex items-center"
        style={{ display: 'flex', width: 'max-content' }}
      >
        {/* Duplicate content for seamless looping */}
        <div className="flex items-center">
          {memoizedItems.map((feature, index) => (
            <SecurityBadge
              key={`${feature.text}-${index}`}
              icon={feature.icon}
              text={feature.text}
              color={feature.color}
            />
          ))}
        </div>
        <div className="flex items-center">
          {memoizedItems.map((feature, index) => (
            <SecurityBadge
              key={`${feature.text}-dup-${index}`}
              icon={feature.icon}
              text={feature.text}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const SecurityMarqueeDemo = () => {

  return (
    <>
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            AI-Powered Security Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Protecting your digital assets with cutting-edge technology
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {/* Top row - Left scrolling */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SmoothMarquee items={securityFeatures} direction="left" speed={40} />
          </motion.div>

          {/* Middle row - Right scrolling */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <SmoothMarquee items={securityFeatures} direction="right" speed={45} />
          </motion.div>

          {/* Bottom row - Left scrolling */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SmoothMarquee items={securityFeatures} direction="left" speed={50} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="group text-lg h-16 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25 button-shine bg-primary hover:bg-primary/90"
          >
            Learn More About Our Security
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
    </>
  )
}

export default SecurityMarqueeDemo