'use client'

import { motion } from 'framer-motion'

import { ScrollAnimation } from '@/components/scroll-animation'
import { GlassCard } from '@/components/ui/glass-card'
import { PageHero } from '@/components/ui/page-hero'
import { SiteShell } from '@/components/ui/site-shell'

const skillCategories = [
  {
    title: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 95 },
      { name: 'Figma', level: 95 },
      { name: 'WordPress', level: 90 },
      { name: 'Variant', level: 92 },
      { name: 'User Research', level: 88 },
      { name: 'ThemeSINE', level: 93 },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'React & Next.js', level: 94 },
      { name: 'Java Spring Boot', level: 94 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Responsive Design', level: 96 },
      { name: 'Web APIs', level: 90 },
    ],
  },
  {
    title: 'Strategy & Management',
    skills: [
      { name: 'Project Management', level: 90 },
      { name: 'Monolithic Architecture', level: 89 },
      { name: 'Design Systems', level: 88 },
      { name: 'Normalization & ERD', level: 91 },
      { name: 'Agile Methodology', level: 91 },
      { name: 'Team Leadership', level: 87 },
      { name: 'Problem Solving', level: 94 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git & GitHub', level: 92 },
      { name: 'Vs Code & Codex', level: 85 },
      { name: 'IntelliJ IDEA', level: 88 },
      { name: 'Android Studio', level: 84 },
      { name: 'Claude Code', level: 90 },
      { name: 'Ubuntu', level: 84 },
      { name: 'Docker', level: 78 },
    ],
  },
]

const additionalSkills = [
  {
    category: 'Frontend Technologies',
    items: [
      'React',
      'Next.js',
      'Flutter',
      'React Native',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'Bootstrap',
      'Material-UI',
      'Shadcn UI',
      'Framer Motion',
      'Redux Toolkit',
      'Zustand',
      'Jest',
      'PWA',
      'Expo',
    ],
  },
  {
    category: 'Backend Technologies',
    items: [
      'Node.js',
      'Express',
      'NestJs',
      'SQLite',
      'PostgreSQL',
      'MongoDB',
      'Firebase',
      'Rest API',
      'GraphQL',
      'PHP Laravel',
      'Java Spring Boot',
      'MySQL',
      'Redis',
      'Docker',
      'JWT',
      'OAuth2',
      'WebSockets',
      'RabbitMQ',
    ],
  },
  {
    category: 'Design Principles',
    items: [
      'Atomic Design',
      'Design Systems',
      'Accessibility',
      'Design Thinking',
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      'Communication',
      'Collaboration',
      'Adaptability',
      'Time Management',
      'Discipline',
    ],
  },
]

const certifications = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google | Coursera',
    year: '2023',
  },
  {
    title: 'Advanced React Development',
    issuer: 'Frontend Masters',
    year: '2023',
  },
  {
    title: 'Web Performance Optimization',
    issuer: 'Web.dev by Google',
    year: '2022',
  },
  {
    title: 'Design Systems Masterclass',
    issuer: 'Interaction Design Foundation',
    year: '2022',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2021',
  },
]

export default function SkillsPage() {
  return (
    <SiteShell>
      <PageHero
        title="Skills & Expertise"
        description="A comprehensive overview of my technical and creative capabilities"
      />

      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {skillCategories.map((category, categoryIndex) => (
              <ScrollAnimation
                key={category.title}
                variant="fadeInUp"
                delay={categoryIndex * 0.1}
              >
                <GlassCard className="h-full space-y-6 p-6 sm:p-8">
                  <h2 className="text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>

                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="mb-3 flex items-center justify-between gap-3">
                          <h3 className="font-semibold text-foreground">
                            {skill.name}
                          </h3>
                          <span className="glass-badge font-bold text-accent">
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          role="progressbar"
                          aria-label={`${skill.name} proficiency`}
                          aria-valuenow={skill.level}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          className="glass-progress"
                        >
                          <motion.div
                            className="glass-progress__fill"
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: 0.2 + skillIndex * 0.05,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section glass-divider-x">
        <div className="page-container">
          <div className="mb-8 sm:mb-10">
            <h2 className="mb-4 text-3xl font-bold text-foreground">
              Additional Skills
            </h2>
            <p className="text-lg text-muted-foreground">
              Beyond the main categories, I also have experience with various
              specialized skills
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {additionalSkills.map((skillGroup, groupIndex) => (
              <ScrollAnimation
                key={skillGroup.category}
                variant="fadeInUp"
                delay={groupIndex * 0.1}
              >
                <GlassCard className="h-full p-6 sm:p-8">
                  <h3 className="mb-4 font-semibold text-foreground">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span key={item} className="glass-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <h2 className="mb-8 text-3xl font-bold text-foreground sm:mb-10">
            Certifications & Continuous Learning
          </h2>

          <div className="space-y-4">
            {certifications.map((cert, certIndex) => (
              <ScrollAnimation
                key={cert.title}
                variant="fadeInUp"
                delay={certIndex * 0.08}
              >
                <GlassCard
                  interactive
                  className="flex items-start  justify-between gap-4 p-6 sm:p-8"
                >
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="shrink-0 text-sm font-medium text-accent">
                    {cert.year}
                  </span>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
