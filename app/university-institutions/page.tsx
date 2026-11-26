import type { Metadata } from 'next'
import { Star } from 'lucide-react'

import { ScrollAnimation } from '@/components/scroll-animation'
import { GlassButton } from '@/components/ui/glass-button'
import { GlassCard } from '@/components/ui/glass-card'
import { PageHero } from '@/components/ui/page-hero'
import { SiteShell } from '@/components/ui/site-shell'
import { createPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = createPageMetadata(
  'Clients & Testimonials',
  'Clients, institutions, and testimonials from collaborative work.',
)

const clients = [
  {
    name: 'TechFlow Solutions',
    industry: 'Software',
    logo: '💻',
    testimonial:
      'Amazing work! The design transformed our platform and our users love it. Highly recommend!',
    author: 'Sarah Johnson',
    role: 'CEO',
    rating: 5,
  },
  {
    name: 'GreenLeaf Co.',
    industry: 'Agriculture',
    logo: '🌱',
    testimonial:
      'Exceptional attention to detail and understanding of our brand. Results exceeded expectations.',
    author: 'Michael Chen',
    role: 'Marketing Director',
    rating: 5,
  },
  {
    name: 'Urban Living',
    industry: 'Real Estate',
    logo: '🏢',
    testimonial:
      'The website redesign increased our leads by 60%. Excellent collaboration throughout the project.',
    author: 'Emma Rodriguez',
    role: 'Product Manager',
    rating: 5,
  },
  {
    name: 'FitFlow Fitness',
    industry: 'Health & Wellness',
    logo: '💪',
    testimonial:
      'Professional, creative, and technically skilled. Everything delivered on time and on budget.',
    author: 'James Wilson',
    role: 'Founder',
    rating: 5,
  },
  {
    name: 'ByteStream Media',
    industry: 'Media & Entertainment',
    logo: '🎬',
    testimonial:
      'Outstanding design work that perfectly captured our brand vision. Will work together again!',
    author: 'Lisa Anderson',
    role: 'Creative Lead',
    rating: 5,
  },
  {
    name: 'CloudNine Analytics',
    industry: 'Data Analytics',
    logo: '📊',
    testimonial:
      'Best designer we&apos;ve worked with. Problem-solving skills and creativity are unmatched.',
    author: 'David Kumar',
    role: 'CTO',
    rating: 5,
  },
]

const caseStudies = [
  {
    company: 'TechFlow Solutions',
    project: 'Platform Redesign',
    metrics: [
      '45% increase in engagement',
      '60% faster load time',
      '35% higher conversion',
    ],
    challenge:
      'The platform had poor UX, causing user frustration and high abandonment rates.',
    solution:
      'Complete redesign focusing on simplicity, performance, and user feedback integration.',
    result:
      'Successfully improved user satisfaction scores and increased active users by 120%.',
  },
  {
    company: 'Urban Living',
    project: 'Website Modernization',
    metrics: [
      '60% more leads',
      '50% bounce rate reduction',
      '3x mobile traffic',
    ],
    challenge:
      'Outdated website design wasn&apos;t mobile-friendly and failed to convert visitors.',
    solution:
      'Modern, responsive redesign with improved navigation and clear call-to-action.',
    result:
      'Became market leader in their segment with significant business growth.',
  },
]

const industries = [
  { icon: '💻', name: 'Technology' },
  { icon: '🏢', name: 'Real Estate' },
  { icon: '💪', name: 'Health & Wellness' },
  { icon: '🎬', name: 'Media & Entertainment' },
  { icon: '📊', name: 'Analytics' },
  { icon: '🛍️', name: 'E-Commerce' },
  { icon: '🌱', name: 'Agriculture' },
  { icon: '📱', name: 'Mobile Apps' },
]

const stats = [
  { number: '100+', label: 'Happy Clients' },
  { number: '5.0★', label: 'Average Rating' },
  { number: '95%', label: 'Project Success Rate' },
  { number: '20+', label: 'Industries Served' },
]

export default function ClientsPage() {
  return (
    <SiteShell>
      <PageHero
        title="Clients & Testimonials"
        description="Trusted by leading companies to deliver exceptional results"
      />

      <section className="page-section">
        <div className="page-container">
          <h2 className="mb-12 text-3xl font-bold text-foreground">
            What Clients Say
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clients.map((client, index) => (
              <ScrollAnimation
                key={client.name}
                variant="fadeInUp"
                delay={index * 0.08}
              >
                <GlassCard interactive className="h-full p-6 sm:p-8">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: client.rating }, (_, starIndex) => (
                      <Star
                        key={starIndex}
                        aria-hidden="true"
                        className="h-5 w-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  <p className="mb-6 leading-relaxed text-foreground">
                    &quot;{client.testimonial}&quot;
                  </p>

                  <div className="glass-divider-top flex items-center gap-3 pt-4">
                    <span className="glass-icon size-12 text-xl">
                      {client.logo}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {client.author}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {client.role} at {client.name}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section glass-divider-x">
        <div className="page-container">
          <h2 className="mb-12 text-3xl font-bold text-foreground">
            Industries Served
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {industries.map((industry, index) => (
              <ScrollAnimation
                key={industry.name}
                variant="scaleIn"
                delay={index * 0.06}
              >
                <GlassCard interactive className="p-6 text-center sm:p-8">
                  <div aria-hidden="true" className="mb-3 text-4xl">
                    {industry.icon}
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {industry.name}
                  </p>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="mb-12 text-3xl font-bold text-foreground">
            Case Studies
          </h2>

          <div className="space-y-8">
            {caseStudies.map((study) => (
              <GlassCard key={study.company} interactive className="p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      {study.company}
                    </h3>
                    <p className="mb-6 font-semibold text-accent">
                      {study.project}
                    </p>

                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Key Metrics
                    </h4>
                    <ul className="space-y-2">
                      {study.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 rounded-full bg-accent"
                          />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        Result
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section glass-divider-top">
        <div className="page-container">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <GlassCard key={stat.label} className="p-6 text-center">
                <p className="mb-2 text-3xl font-bold text-accent">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-foreground text-balance sm:text-5xl">
            Ready to join our successful clients?
          </h2>
          <p className="mb-8 text-xl text-muted-foreground text-balance">
            Let&apos;s discuss how I can help your business achieve its goals
          </p>
          <GlassButton variant="primary">Schedule a Consultation</GlassButton>
        </div>
      </section>
    </SiteShell>
  )
}
