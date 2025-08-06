import { Brain } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="https://i.postimg.cc/h43PsyhN/Untitled-design-14.png" 
                alt="Ai Thumbs" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl">Ai Thumbs</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming businesses through advanced AI solutions and expert consulting.
            </p>
            <div className="relative mt-4 inline-block">
              <div className="relative group">
                <img
                  src="https://i.postimg.cc/13kvWzXb/Untitled-design-24.png"
                  alt="Trusted & Secure AI Solutions — GDPR, SSL, Payment Security"
                  className="w-24 sm:w-28 lg:w-32 rounded-xl shadow-md opacity-90 group-hover:opacity-100 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/25 transition-all duration-300"
                  draggable="false"
                />
                
                {/* Hover Tooltip */}
                <div className="absolute bottom-full left-0 mb-3 px-4 py-2 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap text-sm font-medium z-50 pointer-events-none min-w-max">
                  Trusted & Secure AI Solutions
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary">AI Consulting</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Custom Development</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Enterprise Integration</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">AI Training</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Case Studies</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">contact@nexusai.com</li>
              <li className="text-sm">+1 (555) 123-4567</li>
              <li className="text-sm">123 AI Street<br />Tech City, TC 12345</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ai Thumbs Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-sm hover:text-primary">Privacy Policy</Link>
              <Link href="#" className="text-sm hover:text-primary">Terms of Service</Link>
              <Link href="#" className="text-sm hover:text-primary">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer