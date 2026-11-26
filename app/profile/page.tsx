import type { Metadata } from 'next'
import { Download, Mail, MapPin, Phone } from 'lucide-react'

import { ScrollAnimation } from '@/components/scroll-animation'
import { GlassCard } from '@/components/ui/glass-card'
import { GlassLink } from '@/components/ui/glass-button'
import { PageHero } from '@/components/ui/page-hero'
import { SiteShell } from '@/components/ui/site-shell'
import { createPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = createPageMetadata(
  'Professional Profile',
  'Learn about my background, competencies, and the approach behind my work.',
)

const competencies = [
  {
    title: 'Front-End Development',
    desc: 'Creating responsive and interactive user interfaces',
  },
  {
    title: 'Back-End Development',
    desc: 'Building robust server-side applications and APIs',
  },
  {
    title: 'Software Development',
    desc: 'Designing and implementing scalable software solutions',
  },
  {
    title: 'Cloud Computing & DevOps',
    desc: 'Deploying and managing applications in cloud environments',
  },
]

const philosophy = [
  'User-centric design - Always start with understanding the user',
  'Simplicity through complexity - Make complicated things simple',
  'Continuous learning - Stay updated with latest trends and technologies',
  'Collaboration - Great results come from diverse perspectives',
  'Quality over quantity - Every project deserves excellence',
]

const funFacts = [
  '- I enjoy building full-stack web applications.',
  '- Always learning new technologies and frameworks.',
  '- I love exploring AI tools to boost development.',
  '- Debugging is like solving a puzzle I enjoy the challenge.',
  '- I believe every project is a chance to learn something new.',
  '- My goal is to become a skilled software engineer.',
]

export default function ProfilePage() {
  return (
    <SiteShell>
      <PageHero
        title="Professional Profile"
        description="Get to know me better and discover what drives my work"
      />

      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <aside className="space-y-8 md:col-span-1">
              <GlassCard className="aspect-square overflow-hidden p-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/me-at-smart-start.jpg"
                  alt="Seng Kimnam"
                  className="h-full w-full object-cover"
                />
              </GlassCard>

              <GlassCard className="space-y-4 p-6">
                <h3 className="font-semibold text-foreground">
                  Contact Information
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent">
                  <Mail aria-hidden="true" className="h-5 w-5 shrink-0" />
                  <a href="mailto:sengkimnam97@gmail.com" className="text-sm">
                    sengkimnam97@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone aria-hidden="true" className="h-5 w-5 shrink-0" />
                  <p className="text-sm">+855 (0) 87-727-254</p>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0"
                  />
                  <p className="text-sm">Phnom Penh, Cambodia</p>
                </div>
              </GlassCard>

              <GlassLink
                href="https://drive.google.com/file/d/1sBWhlw8STxw3qpPA2dQEzuYwvrAaG0OP/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full"
              >
                <Download aria-hidden="true" className="h-5 w-5" />
                Download CV
              </GlassLink>

              <GlassCard className="p-6">
                <h4 className="mb-4 font-semibold text-foreground">Languages</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Khmer - Native</li>
                  <li>English - Upper-Intermediate</li>
                </ul>
              </GlassCard>
            </aside>

            <div className="space-y-10 md:col-span-2">
              <section aria-labelledby="about-me-title">
                <h2
                  id="about-me-title"
                  className="mb-4 text-3xl font-bold text-foreground"
                >
                  About Me
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I&apos;m a Full-Stack Developer passionate about creating
                  clean, responsive, and scalable web applications. I enjoy
                  solving real-world problems through technology and
                  continuously expanding my skills in modern web development.
                </p>
                <p className="my-4 text-lg leading-relaxed text-muted-foreground">
                  My primary stack includes HTML, CSS, JavaScript, Tailwind CSS,
                  React, Next.js, TypeScript, Node.js, Express.js, NestJS and I
                  have experience with PHP Laravel, Java Spring Boot, SQLite,
                  MySQL, PostgreSQL and MongoDB. I&apos;m always eager to learn
                  new technologies, take on challenging projects, and build
                  software that delivers a great user experience.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  My approach combines strategic thinking, creative design, and
                  technical excellence to deliver solutions that not only look
                  great but also drive results.
                </p>
              </section>

              <section className="glass p-6" aria-labelledby="philosophy-title">
                <h3
                  id="philosophy-title"
                  className="mb-4 text-2xl font-bold text-foreground"
                >
                  My Philosophy
                </h3>
                <ul className="space-y-3">
                  {philosophy.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                      />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="competencies-title">
                <h3
                  id="competencies-title"
                  className="mb-6 text-2xl font-bold text-foreground"
                >
                  Core Competencies
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {competencies.map((competency, index) => (
                    <ScrollAnimation
                      key={competency.title}
                      variant="fadeInUp"
                      delay={index * 0.08}
                    >
                      <GlassCard interactive className="h-full p-5 sm:p-6">
                        <h4 className="mb-2 font-semibold text-foreground">
                          {competency.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {competency.desc}
                        </p>
                      </GlassCard>
                    </ScrollAnimation>
                  ))}
                </div>
              </section>

              <section aria-labelledby="fun-facts-title">
                <h3
                  id="fun-facts-title"
                  className="mb-4 text-2xl font-bold text-foreground"
                >
                  Fun Facts
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {funFacts.map((fact) => (
                    <p key={fact} className="text-sm text-muted-foreground">
                      {fact}
                    </p>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
