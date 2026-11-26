'use client'

import {
  CheckSquare,
  ExternalLink,
  ShoppingBag,
  ShoppingCart,
  Store,
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { ScrollAnimation } from '@/components/scroll-animation'
import { GlassButton, GlassLink } from '@/components/ui/glass-button'
import { GlassCard } from '@/components/ui/glass-card'
import { PageHero } from '@/components/ui/page-hero'
import { SiteShell } from '@/components/ui/site-shell'

const projects = [
  {
    title: 'BLACK CUBE',
    category: 'design',
    description:
      'An immersive product showcase for a Cambodian black chicken soup cube, combining brand storytelling, recipes, and an interactive Three.js 3D product preview.',
    icon: ShoppingBag,
    tags: ['Brand Website', 'Three.js', 'Product Design'],
    url: 'https://blackcube.website/',
  },
  {
    title: 'BBU E-Commerce',
    category: 'development',
    description:
      'A Khmer-language storefront for browsing products by category and brand, designed to make everyday online shopping simple and accessible.',
    icon: Store,
    tags: ['React', 'E-Commerce', 'Responsive UI'],
    url: 'https://bbu-ecommerce-ab6be.web.app/',
  },
  {
    title: 'PWA Task',
    category: 'development',
    description:
      'An offline-first habit tracker that lets users add routines without a connection, queues updates, and syncs automatically when they reconnect.',
    icon: CheckSquare,
    tags: ['PWA', 'React', 'Offline-first'],
    url: 'https://pwa-project-pearl.vercel.app/',
  },
  {
    title: 'ShopNow Smart Choice',
    category: 'design',
    description:
      'A marketplace prototype that guides shoppers from search and product comparison to checkout, with an AI shortlist that reduces choice overload.',
    icon: ShoppingCart,
    tags: ['UX Prototype', 'AI Flow', 'Marketplace'],
    url: 'https://group10-prototype.vercel.app/',
  },
]

const filters = ['all', 'design', 'development']

const highlights = [
  { number: '5', label: 'Projects Completed' },
  { number: '...', label: 'Happy Clients' },
  { number: '1+', label: 'Years Experience' },
  { number: '4.5', label: 'Average Rating' },
]

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedFilter)

  return (
    <SiteShell mainClassName="relative isolate overflow-hidden">
      <PageHero
        eyebrow="Selected Work"
        title="My Portfolio"
        description="A showcase of my best design and development projects"
      />

      <section className="page-section">
        <div className="page-container">
          <div className="mb-12 flex justify-center sm:mb-16">
            <GlassCard className="inline-flex max-w-full gap-1 p-1.5">
              <div className="flex max-w-full gap-1 overflow-x-auto">
                {filters.map((filter) => (
                  <GlassButton
                    key={filter}
                    type="button"
                    variant={
                      selectedFilter === filter ? 'primary' : 'secondary'
                    }
                    aria-pressed={selectedFilter === filter}
                    onClick={() => setSelectedFilter(filter)}
                    className="capitalize"
                  >
                    {filter}
                  </GlassButton>
                ))}
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            <AnimatePresence mode="sync">
              {filteredProjects.map((project, idx) => {
                const ProjectIcon = project.icon

                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group"
                  >
                    <GlassCard interactive className="h-full overflow-hidden p-0">
                      <div className="flex h-56 items-center justify-center overflow-hidden border-b border-(--glass-divider) bg-(--glass-input-bg) transition-colors group-hover:bg-(--glass-input-bg-hover)">
                        <span className="glass-icon size-32 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105">
                          <ProjectIcon
                            aria-hidden="true"
                            className="h-16 w-16"
                            strokeWidth={1.4}
                          />
                        </span>
                      </div>

                      <div className="p-6 sm:p-7">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                          {project.category}
                        </p>
                        <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                          {project.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                          {project.description}
                        </p>

                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="glass-badge">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <GlassLink
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="secondary"
                          className="mt-2 w-full"
                        >
                          View Project
                          <ExternalLink
                            aria-hidden="true"
                            className="h-4 w-4"
                          />
                        </GlassLink>
                      </div>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 ? (
            <p className="py-12 text-center text-lg text-muted-foreground">
              No projects found
            </p>
          ) : null}
        </div>
      </section>

      <section className="page-section glass-divider-x">
        <div className="page-container">
          <ScrollAnimation variant="fadeInUp" className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-foreground">
              Portfolio Highlights
            </h2>
            <p className="text-muted-foreground">
              A snapshot of my work and experience
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {highlights.map((stat, idx) => (
              <ScrollAnimation key={stat.label} variant="scaleIn" delay={idx * 0.1}>
                <GlassCard className="p-6 text-center">
                  <p className="mb-2 text-3xl font-bold text-accent">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container max-w-4xl">
          <ScrollAnimation variant="fadeInUp">
            <GlassCard variant="strong" className="px-6 py-12 text-center sm:px-12 sm:py-16">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Let&apos;s create something
              </p>
              <h2 className="mb-6 text-4xl font-bold text-foreground text-balance sm:text-5xl">
                Interested in working together?
              </h2>
              <p className="mb-8 text-xl text-muted-foreground text-balance">
                Let&apos;s discuss your next project and how I can help bring
                your vision to life
              </p>
              <GlassLink href="/contact" variant="primary">
                Start a Project
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </GlassLink>
            </GlassCard>
          </ScrollAnimation>
        </div>
      </section>
    </SiteShell>
  )
}
