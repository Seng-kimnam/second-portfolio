'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Code2, Mail, MapPin, Phone, Send, Share2 } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'

import { ScrollAnimation } from '@/components/scroll-animation'
import { GlassButton, GlassLink } from '@/components/ui/glass-button'
import { GlassCard } from '@/components/ui/glass-card'
import { PageHero } from '@/components/ui/page-hero'
import { SiteShell } from '@/components/ui/site-shell'

const FORM_SUBMIT_ENDPOINT =
  'https://formsubmit.co/ajax/sengkimnam97@gmail.com'

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    value: 'sengkimnam97@gmail.com',
    note: 'Typically reply within 24 hours',
    href: 'mailto:sengkimnam97@gmail.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+855 (0) 87-727-254',
    note: 'Mon-Fri, 9am-6pm GMT+7',
    href: 'https://t.me/SengKimnam',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Phnom Penh, Cambodia',
    note: 'Available for remote work globally',
  },
]

const socials = [
  {
    href: 'https://www.linkedin.com/in/kimnam-seng-31595b2b8/',
    icon: Share2,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/Seng-kimnam',
    icon: Code2,
    label: 'GitHub',
  },
]

const faqs = [
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
]

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
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
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
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred'
      setError(errorMessage)
      console.error('Contact form error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SiteShell>
      <PageHero
        title="Get in Touch"
        description="Have a project in mind? Let's talk about how I can help"
      />

      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <ScrollAnimation variant="slideInLeft" className="space-y-8">
              <section aria-labelledby="contact-information-title">
                <h2
                  id="contact-information-title"
                  className="mb-8 text-2xl font-bold text-foreground"
                >
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon
                    const content = (
                      <>
                        <span className="glass-icon size-12">
                          <Icon aria-hidden="true" className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="mb-1 font-semibold text-foreground">
                            {detail.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {detail.value}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {detail.note}
                          </p>
                        </div>
                      </>
                    )

                    return (
                      <GlassCard
                        key={detail.title}
                        interactive
                        className="p-5 sm:p-6"
                      >
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={
                              detail.href.startsWith('http')
                                ? '_blank'
                                : undefined
                            }
                            rel={
                              detail.href.startsWith('http')
                                ? 'noopener noreferrer'
                                : undefined
                            }
                            className="flex items-start gap-4 rounded-xl"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-start gap-4">{content}</div>
                        )}
                      </GlassCard>
                    )
                  })}
                </div>
              </section>

              <section aria-labelledby="social-title">
                <h3 id="social-title" className="mb-4 text-lg font-bold text-foreground">
                  Connect on Social
                </h3>
                <div className="flex gap-3">
                  {socials.map((social) => {
                    const Icon = social.icon
                    return (
                      <GlassLink
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="secondary"
                        size="icon"
                        aria-label={social.label}
                      >
                        <Icon aria-hidden="true" className="h-5 w-5 text-accent" />
                      </GlassLink>
                    )
                  })}
                </div>
              </section>

              <GlassCard variant="strong" className="p-6">
                <h3 className="mb-2 font-semibold text-foreground">
                  Availability
                </h3>
                <p className="mb-3 text-sm text-muted-foreground">
                  Currently available for freelance projects and full-time
                  opportunities.
                </p>
                <div className="flex items-center gap-2">
                  <motion.span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  <p className="text-sm font-medium text-foreground">
                    Open for new projects
                  </p>
                </div>
              </GlassCard>
            </ScrollAnimation>

            <ScrollAnimation variant="slideInRight" className="lg:col-span-2">
              <GlassCard variant="strong" className="p-6 sm:p-10">
                <h2 className="mb-6 text-2xl font-bold text-foreground">
                  Send Me a Message
                </h2>

                <AnimatePresence mode="sync">
                  {submitted ? (
                    <motion.div
                      className="glass-alert glass-alert--success mb-6"
                      role="status"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      ✓ Message sent successfully! I&apos;ll get back to you soon.
                    </motion.div>
                  ) : null}
                  {error ? (
                    <motion.div
                      className="glass-alert glass-alert--error mb-6"
                      role="alert"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Error: {error}
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-foreground"
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
                      className="glass-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-foreground"
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
                      className="glass-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-foreground"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="glass-input"
                    >
                      <option value="">Select a subject</option>
                      <option value="project-inquiry">Project Inquiry</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="freelance">Freelance Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-foreground"
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
                      className="glass-input resize-none"
                    />
                  </div>

                  <GlassButton
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <span className="animate-spin" aria-hidden="true">
                          ⏳
                        </span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send aria-hidden="true" className="h-5 w-5" />
                      </>
                    )}
                  </GlassButton>
                </form>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  I&apos;ll respond to your message within 24 hours.
                </p>
              </GlassCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="page-section glass-divider-x">
        <div className="page-container max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation
                key={faq.q}
                variant="fadeInUp"
                delay={index * 0.08}
              >
                <details className="glass group p-5 sm:p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                    {faq.q}
                    <span
                      aria-hidden="true"
                      className="text-2xl text-accent transition-transform group-open:rotate-180"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
