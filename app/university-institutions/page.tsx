import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Star } from 'lucide-react'

export default function ClientsPage() {
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
      metrics: ['45% increase in engagement', '60% faster load time', '35% higher conversion'],
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
      metrics: ['60% more leads', '50% bounce rate reduction', '3x mobile traffic'],
      challenge:
        'Outdated website design wasn&apos;t mobile-friendly and failed to convert visitors.',
      solution:
        'Modern, responsive redesign with improved navigation and clear call-to-action.',
      result:
        'Became market leader in their segment with significant business growth.',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-balance mb-4">Clients & Testimonials</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Trusted by leading companies to deliver exceptional results
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">What Clients Say</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-muted rounded-lg border border-border hover:border-accent transition-colors"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-foreground mb-6 leading-relaxed">
                    &quot;{client.testimonial}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-border pt-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-xl">
                      {client.logo}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{client.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {client.role} at {client.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Industries */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-3xl font-bold text-foreground mb-12">Industries Served</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: '💻', name: 'Technology' },
                { icon: '🏢', name: 'Real Estate' },
                { icon: '💪', name: 'Health & Wellness' },
                { icon: '🎬', name: 'Media & Entertainment' },
                { icon: '📊', name: 'Analytics' },
                { icon: '🛍️', name: 'E-Commerce' },
                { icon: '🌱', name: 'Agriculture' },
                { icon: '📱', name: 'Mobile Apps' },
              ].map((industry, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background rounded-lg border border-border text-center hover:border-accent transition-colors"
                >
                  <div className="text-4xl mb-3">{industry.icon}</div>
                  <p className="font-semibold text-foreground text-sm">{industry.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Case Studies</h2>

            <div className="space-y-8">
              {caseStudies.map((study, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-muted rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {study.company}
                      </h3>
                      <p className="text-accent font-semibold mb-6">{study.project}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 text-sm">
                          Key Metrics
                        </h4>
                        <ul className="space-y-2">
                          {study.metrics.map((metric, mIdx) => (
                            <li
                              key={mIdx}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-2 h-2 bg-accent rounded-full" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">
                          Challenge
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">
                          Solution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">
                          Result
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '100+', label: 'Happy Clients' },
                { number: '5.0★', label: 'Average Rating' },
                { number: '95%', label: 'Project Success Rate' },
                { number: '20+', label: 'Industries Served' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background rounded-lg border border-border text-center"
                >
                  <p className="text-3xl font-bold text-accent mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Ready to join our successful clients?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Let&apos;s discuss how I can help your business achieve its goals
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
