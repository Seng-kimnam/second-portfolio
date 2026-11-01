'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ScrollAnimation } from '@/components/scroll-animation'
import {
  CheckSquare,
  ExternalLink,
  ShoppingBag,
  ShoppingCart,
  Store,
} from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState('all')

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

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter)

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
              My Portfolio
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              A showcase of my best design and development projects
            </motion.p>
          </div>
        </section>

        {/* Filter & Projects */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <motion.div
              className="flex justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 cursor-pointer rounded-lg font-semibold transition-colors capitalize ${
                    selectedFilter === filter
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-border'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, idx) => {
                  const ProjectIcon = project.icon

                  return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="group bg-muted rounded-lg border border-border overflow-hidden hover:border-accent transition-all hover:shadow-lg"
                  >
                    {/* Image */}
                    <motion.div
                      className="h-64 bg-linear-to-br from-accent/10 to-accent/5 flex items-center justify-center text-8xl overflow-hidden"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ProjectIcon className="w-24 h-24 text-accent" strokeWidth={1.5} />
                    </motion.div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h3
                        className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIdx) => (
                          <motion.span
                            key={tag}
                            className="px-2 py-1 text-xs bg-background rounded text-muted-foreground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: tagIdx * 0.05 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-lg font-semibold hover:bg-accent/20 transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* No Projects */}
            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-lg text-muted-foreground">No projects found</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Project Stats */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Portfolio Highlights
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '50+', label: 'Projects Completed' },
                { number: '100+', label: 'Happy Clients' },
                { number: '8+', label: 'Years Experience' },
                { number: '5⭐', label: 'Average Rating' },
              ].map((stat, idx) => (
                <ScrollAnimation
                  key={idx}
                  variant="scaleIn"
                  delay={idx * 0.1}
                >
                  <motion.div
                    className="p-6 bg-background rounded-lg border border-border text-center"
                    whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-3xl font-bold text-accent mb-2">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Interested in working together?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Let&apos;s discuss your next project and how I can help bring your vision to life
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Start a Project
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
