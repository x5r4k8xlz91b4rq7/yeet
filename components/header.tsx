"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Brain, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const Header = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [showSilhouette, setShowSilhouette] = useState(false)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Function to determine if a nav item is active based on current route
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'
    }
    return pathname === path
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = [
      { id: 'hero', name: 'home' },
      { id: 'services', name: 'services' },
      { id: 'contact', name: 'contact' }
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = sections.find(s => s.id === entry.target.id)?.name
            if (sectionName) {
              setActiveSection(sectionName)
            }
          }
        })
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    )

    sections.forEach(section => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])
  
  const handleServicesMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setIsServicesHovered(true)
  }

  const handleServicesMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesHovered(false)
    }, 200)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSilhouette(true)
      setTimeout(() => {
        setShowSilhouette(false)
      }, 3500)
    }, 20000)

    return () => clearInterval(interval)
  }, [])

  const serviceOptions = [
    { label: 'AI Catering Chatbots', href: '#services', tabValue: 'AI Catering Chatbots' },
    { label: 'Tiered Website Packages', href: '#services', tabValue: 'Tiered Website Packages' },
    { label: 'Real-Time Booking Integration', href: '#services', tabValue: 'Real-Time Booking Integration' },
    { label: 'Analytics & CRM Automation', href: '#services', tabValue: 'Analytics & CRM Automation' },
    { label: 'Business Card & Branding Design', href: '#services', tabValue: 'Business Card & Branding Design' },
    { label: 'View All Services', href: '/services', tabValue: null }
  ]

  const handleServiceClick = (tabValue: string) => {
    setIsServicesHovered(false)
    
    // If it's the "View All Services" option, navigate directly
    if (!tabValue) {
      router.push('/services')
      return
    }
    
    // For homepage service tabs, scroll to services section and switch tab
    if (window.location.pathname === '/') {
      // First dispatch the tab switch event
      window.dispatchEvent(new CustomEvent('switchServiceTab', {
        detail: { serviceName: tabValue }
      }))
      
      // Then scroll to the services tabs section
      setTimeout(() => {
        const servicesTabsSection = document.getElementById('services-tabs')
        if (servicesTabsSection) {
          const headerHeight = 80 // Account for fixed header
          const elementPosition = servicesTabsSection.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else {
      // If not on homepage, navigate to homepage and then switch tab
      router.push('/')
      setTimeout(() => {
        // Dispatch tab switch event
        window.dispatchEvent(new CustomEvent('switchServiceTab', {
          detail: { serviceName: tabValue }
        }))
        
        // Then scroll to the services tabs section
        setTimeout(() => {
          const servicesTabsSection = document.getElementById('services-tabs')
          if (servicesTabsSection) {
            const headerHeight = 80 // Account for fixed header
            const elementPosition = servicesTabsSection.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
          }
        }, 300)
      }, 200)
    }
  }

  const handleNavClick = (targetPath: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    // Don't interfere with external links, new tab links, or hash links
    const link = e.currentTarget
    if (link.target === '_blank' || 
        link.href.startsWith('http') && !link.href.includes(window.location.origin) ||
        targetPath.includes('#')) {
      return
    }

    // If clicking on the same page, scroll to top
    if (targetPath === pathname) {
      e.preventDefault()
      
      // Close mobile menu if open
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
      
      // Check motion preferences
      const prefersReducedMotion = typeof window !== 'undefined' && 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      
      // Scroll to top
      if (typeof window !== 'undefined') {
        window.scrollTo({
          top: 0,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        })
        
        // Focus management for accessibility
        setTimeout(() => {
          const mainHeading = document.querySelector('h1')
          if (mainHeading) {
            mainHeading.focus({ preventScroll: true })
          }
        }, prefersReducedMotion ? 0 : 500)
      }
    }
  }
  const navItems = [
    { label: 'About Us', href: '/about', id: 'about' },
    { label: 'Contact', href: '/contact', id: 'contact' },
  ]

  return (
    <header className={cn(
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <img 
              src="https://i.postimg.cc/h43PsyhN/Untitled-design-14.png" 
              alt="Ai Thumbs" 
              className="h-8 w-auto"
            />
            <div className="relative">
              <span className="font-bold text-2xl tracking-tight">Ai Thumbs</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              <div className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-opacity duration-500",
                showSilhouette ? "opacity-100" : "opacity-0"
              )} />
              <img
                src="https://i.postimg.cc/52cN6k57/Untitled-design-8-removebg-preview.png"
                alt=""
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 pointer-events-none object-contain transition-opacity duration-500 h-32 w-auto",
                  "filter brightness-0 saturate-100",
                  showSilhouette ? "opacity-100" : "opacity-0"
                )}
                style={{ top: '16px' }}
              />
              <div 
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 pointer-events-none transition-opacity duration-500 h-32 w-auto bg-purple-500 mix-blend-multiply",
                  showSilhouette ? "opacity-100" : "opacity-0"
                )}
                style={{ 
                  top: '16px',
                  width: 'auto',
                  aspectRatio: '1',
                  maskImage: 'url(https://i.postimg.cc/52cN6k57/Untitled-design-8-removebg-preview.png)',
                  maskSize: 'contain',
                  maskRepeat: 'no-repeat',
                  maskPosition: 'center',
                  WebkitMaskImage: 'url(https://i.postimg.cc/52cN6k57/Untitled-design-8-removebg-preview.png)',
                  WebkitMaskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center'
                }}
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              onClick={(e) => handleNavClick('/', e)}
              className={cn(
                "text-sm font-medium hover:text-primary transition-all duration-300 relative"
              )}
            >
              Home
              {isActive('/') && (
                <motion.div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  layoutId="activeTab"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
            <div 
              className="relative"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link
                href="#services"
                className={cn(
                  "text-sm font-medium hover:text-primary transition-all duration-300 flex items-center gap-1 relative"
                )}
                onClick={(e) => {
                  if (window.location.pathname !== '/') {
                    e.preventDefault()
                    router.push('/#services')
                  }
                }}
              >
                Services
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isServicesHovered ? "rotate-180" : ""
                )} />
                {pathname === '/services' && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
              
              <div className={cn(
                "absolute top-full left-0 mt-2 w-64 bg-background/95 backdrop-blur-md border rounded-lg shadow-lg transition-all duration-200 origin-top",
                isServicesHovered 
                  ? "opacity-100 scale-100 translate-y-0" 
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              )}
              >
                <div className="p-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => handleServiceClick(service.tabValue || '')}
                      className={`w-full text-left px-3 py-2 text-sm transition-all duration-300 cursor-pointer ${
                        !service.tabValue 
                          ? 'border-t border-border mt-2 pt-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 hover:scale-105 shadow-md' 
                          : 'hover:bg-primary/10 hover:text-primary rounded-md'
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(item.href, e)}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-all duration-300 relative"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <Button 
              className="rounded-full px-6" 
              size="lg"
              onClick={() => router.push('/demo')}
            >
              View Live Demo
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b">
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-6">
              <Link
                href="/"
                onClick={(e) => handleNavClick('/', e)}
                className={cn(
                  "text-lg font-medium hover:text-primary transition-all duration-300",
                  isActive('/') && "text-primary font-semibold"
                )}
              >
                Home
              </Link>
              <div className="space-y-2">
                <p className={cn(
                  "text-lg font-medium",
                  (pathname === '/' || pathname === '/services') ? "text-primary" : "text-muted-foreground"
                )}>
                  Services
                </p>
                <div className="pl-4 space-y-2">
                  {serviceOptions.map((service) => (
                    <button
                      key={service.label}
                      onClick={() => {
                        handleServiceClick(service.tabValue || '')
                        setIsMobileMenuOpen(false)
                      }}
                      className={`block text-left text-base hover:text-primary transition-colors ${
                        !service.tabValue ? 'font-semibold border-t border-border mt-2 pt-2' : ''
                      }`}
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={cn(
                    "text-lg font-medium hover:text-primary transition-all duration-300",
                    isActive(item.href) && "text-primary font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="w-full rounded-full" 
                size="lg" 
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  router.push('/demo')
                }}
              >
                View Live Demo
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header