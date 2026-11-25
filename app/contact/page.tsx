'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import { Mail, Phone, MapPin, Share2, Code2, MessageSquare, Send } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FORM_SUBMIT_ENDPOINT =
  'https://formsubmit.co/ajax/sengkimnam97@gmail.com'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact Form Submission: ${formData.subject}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      const data = (await response.json()) as {
        error?: string
        message?: string
      }
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      console.log('Message sent successfully:', data)
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      console.error('Contact form error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-balance mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Have a project in mind? Let&apos;s talk about how I can help
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <ScrollAnimation variant="slideInLeft">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-8">
                      Contact Information
                    </h2>

                    {/* Email */}
                    <motion.a
                      href="mailto:sengkimnam97@gmail.com"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div> 
                        <h3 className="font-semibold text-foreground mb-1">
                          Email
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          sengkimnam97@gmail.com
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Typically reply within 24 hours
                        </p>
                      </div>
                    </motion.a>

                    {/* Phone */}
                    <motion.a
                      href="https://t.me/SengKimnam"
                      target="_blank"
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Phone
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          +855 (0) 87-727-254
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Mon-Fri, 9am-6pm GMT+7  
                        </p>
                      </div>
                    </motion.a>

                    {/* Location */}
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Location
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Phnom Penh, Cambodia
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Available for remote work globally
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </ScrollAnimation>

                {/* Social Links */}
                <ScrollAnimation variant="slideInLeft" delay={0.1}>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">
                      Connect on Social
                    </h3>
                    <div className="flex gap-3">
                      {[
                        { href: 'https://www.linkedin.com/in/kimnam-seng-31595b2b8/', icon: Share2, label: 'LinkedIn' },
                        { href: 'https://github.com/Seng-kimnam', icon: Code2, label: 'GitHub' },
                          
                      ].map((social, idx) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                          aria-label={social.label}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.1, y: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>

                {/* Availability */}
                <ScrollAnimation variant="slideInLeft" delay={0.2}>
                  <motion.div
                    className="p-4 bg-accent/10 rounded-lg border border-accent/20"
                    whileHover={{ boxShadow: '0 10px 30px rgba(31, 153, 84, 0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Currently available for freelance projects and full-time opportunities.
                    </p>
                    <div className="flex items-center gap-2">
                      <motion.span
                        className="w-2 h-2 bg-green-500 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      <p className="text-sm font-medium text-foreground">Open for new projects</p>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              </div>

              {/* Contact Form */}
              <ScrollAnimation variant="slideInRight" className="lg:col-span-2">
                <motion.div
                  className="p-8 bg-muted rounded-lg border border-border"
                  whileHover={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Me a Message
                  </h2>

                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        className="p-4 mb-6 bg-green-500/10 border border-green-500/20 rounded-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-green-700 dark:text-green-400 text-sm font-medium">
                          ✓ Message sent successfully! I&apos;ll get back to you soon.
                        </p>
                      </motion.div>
                    )}
                    {error && (
                      <motion.div
                        className="p-4 mb-6 bg-red-500/10 border border-red-500/20 rounded-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="text-red-700 dark:text-red-400 text-sm font-medium">
                          Error: {error}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a subject</option>
                        <option value="project-inquiry">Project Inquiry</option>
                        <option value="collaboration">Collaboration</option>
                        <option value="freelance">Freelance Opportunity</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-foreground mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell me about your project or opportunity..."
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                    >
                      {loading ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          >
                            ⏳
                          </motion.span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </form>

                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    I&apos;ll respond to your message within 24 hours.
                  </p>
                </motion.div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'What is your typical project turnaround time?',
                  a: 'Most projects take 2-8 weeks depending on scope. I provide detailed timelines during the initial consultation.',
                },
                {
                  q: 'Do you offer retainer services?',
                  a: 'Yes! I offer flexible retainer packages for ongoing design and development support.',
                },
                {
                  q: 'What is your pricing model?',
                  a: 'I offer project-based pricing, hourly rates, and retainer options. Let&apos;s discuss what works best for you.',
                },
                {
                  q: 'Can you work with my existing team?',
                  a: 'Absolutely! I thrive in collaborative environments and integrate seamlessly with your team.',
                },
              ].map((faq, idx) => (
                <details
                  key={idx}
                  className="group p-4 bg-background rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground">
                    {faq.q}
                    <span className="text-accent text-2xl group-open:rotate-180 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
