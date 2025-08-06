"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useToast } from '@/hooks/use-toast'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Calendar,
  ArrowRight,
  Globe,
  Shield,
  Zap
} from 'lucide-react'
import Link from 'next/link'

interface FormData {
  fullName: string
  email: string
  company: string
  phone: string
  message: string
}

interface FormErrors {
  fullName?: string
  email?: string
  company?: string
  phone?: string
  message?: string
}

export default function ContactPageContent() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the highlighted fields and try again.",
        variant: "destructive"
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@aithumbs.com',
      description: 'Send us a message anytime',
      action: 'mailto:hello@aithumbs.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Speak with our AI specialists',
      action: 'tel:+15551234567'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM EST',
      description: 'Weekend support available',
      action: null
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Remote-First Company',
      description: 'Serving caterers nationwide',
      action: null
    }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: 'Schedule Demo',
      description: 'Book a live 30-minute demo',
      action: '/demo',
      color: 'bg-primary'
    },
    {
      icon: MessageCircle,
      title: 'View Services',
      description: 'Explore our AI solutions',
      action: '/services',
      color: 'bg-blue-500'
    },
    {
      icon: Globe,
      title: 'See Examples',
      description: 'Live chatbot demonstrations',
      action: '/demo',
      color: 'bg-green-500'
    }
  ]

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
              GET IN TOUCH
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Let's Talk About</span><br />
              Your AI Transformation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Ready to revolutionize your catering business? Our AI specialists are here to help you capture more leads, 
              automate operations, and grow your revenue with cutting-edge technology.
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {quickActions.map((action, index) => (
              <Link key={action.title} href={action.action}>
                <Card className="glass-card hover:scale-105 transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Tell us about your catering business and how we can help you grow with AI automation.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for contacting us. We'll get back to you within 24 hours with a custom AI solution proposal.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="rounded-full"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            placeholder="Your full name"
                            className={errors.fullName ? 'border-red-500' : ''}
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name *
                          </label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Your catering business"
                            className={errors.company ? 'border-red-500' : ''}
                          />
                          {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Business Email *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            placeholder="your@business.com"
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder="Tell us about your catering business and what challenges you're facing with lead management, customer service, or operations..."
                          className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit"
                        className="w-full md:w-auto rounded-full px-8 hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/25"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground text-lg">
                  Whether you're just exploring AI options or ready to transform your catering operations, 
                  we're here to help. Reach out using any of the methods below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="glass-card hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.action ? (
                            <a 
                              href={info.action}
                              className="text-primary hover:text-primary/80 transition-colors font-medium"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="font-medium">{info.content}</p>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Us */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Why Choose Ai Thumbs?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'Industry-specific expertise in catering',
                    '500+ successful AI implementations',
                    '24/7 support and maintenance',
                    'GDPR compliant and secure systems',
                    'Custom solutions, not cookie-cutter templates',
                    'Proven track record of 180% revenue increases'
                  ].map((reason, index) => (
                    <div key={reason} className="flex items-center gap-3">
                      <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{reason}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
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
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of successful caterers who have already revolutionized their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button size="lg" className="rounded-full px-8">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Free Demo
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}