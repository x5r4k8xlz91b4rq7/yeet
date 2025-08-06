"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here without page reload
    // Add your form submission logic here
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Subject" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full md:w-auto">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm text-muted-foreground">contact@aithumbs.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-sm text-muted-foreground">
                    123 AI Street<br />
                    Tech City, TC 12345<br />
                    United States
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact