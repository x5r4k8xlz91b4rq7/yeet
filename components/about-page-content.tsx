"use client"

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain,
  Users,
  Target,
  Award,
  Lightbulb,
  Heart,
  Sparkles,
  ChefHat,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Zap,
  Star
} from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'CEO & AI Strategist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    bio: '10+ years in AI automation, former tech lead at major SaaS companies. Passionate about transforming traditional industries with cutting-edge technology.',
    expertise: ['AI Strategy', 'Business Automation', 'SaaS Development']
  },
  {
    name: 'Sarah Rodriguez',
    role: 'Head of AI Development',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    bio: 'Former machine learning engineer at Google. Specializes in natural language processing and conversational AI systems for business applications.',
    expertise: ['Machine Learning', 'NLP', 'Chatbot Development']
  },
  {
    name: 'Marcus Thompson',
    role: 'Director of Client Success',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    bio: '15+ years in hospitality technology. Deep understanding of catering operations and the unique challenges food service businesses face.',
    expertise: ['Hospitality Tech', 'Client Relations', 'Process Optimization']
  }
]

const values = [
  {
    icon: Target,
    title: 'Precision-Focused',
    description: 'Every solution is tailored specifically for catering businesses, not generic one-size-fits-all tools.'
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Your success is our success. We work closely with each client to ensure maximum ROI and satisfaction.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation-First',
    description: 'We stay ahead of AI trends to bring cutting-edge solutions that give our clients competitive advantages.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'GDPR compliant, secure data handling, and transparent processes you can rely on.'
  }
]

const achievements = [
  { number: '500+', label: 'Catering Businesses Transformed' },
  { number: '180%', label: 'Average Revenue Increase' },
  { number: '99.9%', label: 'System Uptime Guarantee' },
  { number: '24/7', label: 'AI Support Availability' }
]

const whyTrustUs = [
  'Industry-specific expertise in catering and food service',
  'Proven track record with 500+ successful implementations',
  'Custom AI solutions, not cookie-cutter templates',
  'Dedicated support team that understands your business',
  'Transparent pricing with no hidden fees',
  'GDPR compliant and enterprise-grade security'
]

export default function AboutPageContent() {
  const router = useRouter()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2" />
              ABOUT AI THUMBS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Revolutionizing Catering</span><br />
              Through AI Innovation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              We're not just another tech company. We're catering industry specialists who happen to be AI experts, 
              dedicated to transforming how food service businesses capture leads, serve customers, and grow their operations.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {achievements.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To empower catering businesses with AI-driven solutions that eliminate the frustration of missed opportunities, 
                streamline operations, and unlock unprecedented growth potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every caterer deserves to focus on what they do best—creating amazing food experiences—while our AI handles 
                the lead capture, customer service, and business optimization that drives success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Card className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <ChefHat className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Who We Serve</h3>
                    <p className="text-muted-foreground">The catering industry exclusively</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    'Corporate catering companies',
                    'Wedding and event caterers',
                    'Restaurant catering divisions',
                    'Specialty diet and meal prep services',
                    'Food truck and mobile catering',
                    'Bakeries expanding into catering'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              The principles that guide every decision we make and every solution we build
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card text-center p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              AI specialists with deep industry knowledge and a passion for transforming catering businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Caterers Trust Ai Thumbs
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're not just building technology—we're building partnerships. Our clients choose us because 
                we understand their industry, deliver measurable results, and provide ongoing support that 
                ensures long-term success.
              </p>
              <div className="flex gap-4">
                <Link href="/demo">
                  <Button className="rounded-full px-6">
                    <Phone className="h-5 w-5 mr-2" />
                    See Our Work
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="rounded-full px-6">
                    <Mail className="h-5 w-5 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Why We're Different
                </h3>
                <div className="space-y-4">
                  {whyTrustUs.map((reason, index) => (
                    <div key={reason} className="flex items-start gap-3">
                      <Star className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Do Best
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Comprehensive AI automation solutions designed specifically for the catering industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: 'AI Chatbot Development',
                description: '24/7 customer service automation that converts inquiries into bookings'
              },
              {
                icon: Globe,
                title: 'Catering Website Design',
                description: 'Professional websites with integrated booking and payment systems'
              },
              {
                icon: TrendingUp,
                title: 'Analytics & CRM',
                description: 'Data-driven insights and automated customer relationship management'
              },
              {
                icon: Users,
                title: 'Lead Generation',
                description: 'AI-powered systems that capture and qualify leads around the clock'
              },
              {
                icon: Zap,
                title: 'Process Automation',
                description: 'Streamline operations from inquiry to invoice with smart automation'
              },
              {
                icon: Clock,
                title: 'Real-time Integration',
                description: 'Seamless connections with calendars, payment systems, and CRMs'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glass-card text-center p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Catering Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful caterers who have already revolutionized their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" className="rounded-full px-8">
                  <Phone className="h-5 w-5 mr-2" />
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Explore Our Solutions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}