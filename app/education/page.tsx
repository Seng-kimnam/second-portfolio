'use client'

import { Award, BookOpen, Calendar } from 'lucide-react'
import Image from 'next/image'

import { ScrollAnimation } from '@/components/scroll-animation'
import { GlassCard } from '@/components/ui/glass-card'
import { GlassLink } from '@/components/ui/glass-button'
import { PageHero } from '@/components/ui/page-hero'
import { SiteShell } from '@/components/ui/site-shell'
import buildBrightLogo from '@/public/big_bbu_logo-removebg-preview.png'
import dichiLogo from '@/public/dichi-logo.png'
import koreaLogo from '@/public/korea-hrd-logo.jpg'

const educationData = [
  {
    schoolLogo: dichiLogo,
    school: 'Dichi Academy',
    degree: 'Professional Certificate',
    field: 'Full Stack Development and Enterpreneurship',
    year: 'July 2026 - Present',
    description: `
      An intensive 7-month incubation program organized by Dichi Academy and Elix, designed to equip Cambodia's most promising university students with the technical expertise and entrepreneurial mindset needed to thrive in the digital economy. The program offers two tracks — Full Stack Development and AI & Data Science — combining 4 months of technical and soft skill training with 3 months of hands-on entrepreneurship incubation and MVP development. The program is fully scholarship-based with no cost to accepted participants.
      `,
    achievements: [
      'Introduction to Javascript',
      'Database and Entity Relation Diagrams',
      'Project Management & Git',
      'UXUI: Practical Designs',
      'Frontend Development with ReactJS',
      'Backend Development with NestJS',
    ],
  },
  {
    schoolLogo: buildBrightLogo,
    school: 'Build Bright University, Phnom Penh, Cambodia',
    degree: 'Bachelor of Science and Technology',
    field: 'Information Technology',
    year: '2022-2026',
    description:
      'This program prepares students with the knowledge and practical skills needed to design, develop, manage, and support modern information technology systems. The curriculum combines computer science fundamentals with hands-on technical training, enabling graduates to solve real-world business and technological problems.',
    achievements: [
      'GPA: 3.66/4.0',
      'Law firm Management System Project',
      'Team lead on thesis project',
      'Scholarship 100% of tuition fees for 4 years from Bacll Grade A',
    ],
  },
  {
    schoolLogo: koreaLogo,
    school: 'Korea Software HRD Center, Phnom Penh, Cambodia',
    degree: 'Professional Certificate',
    field: 'Full Stack Web Development',
    year: 'February 2025 - June 2025',
    description: `
      Training period of basic course in 5months from 8:00 AM to 5:00AM. In Basic Course we will train student to become fullstack web developer. The goal of basic course is to understand the key concepts of the technologies and improve the implementation skills. We motivate students to practice more by giving homework and assignments, which could help them improve the understanding and implementation skills.
      `,
    achievements: [
      'Frontend Developer in team',
      'Build Room Renting Management System Project',
      'Design System Features with Figjam',
      'Research and Create slide about java lesson ',
    ],
  },
]

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
  },
  {
    name: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    date: '2023',
  },
  {
    name: 'Figma Advanced Certification',
    issuer: 'Figma Academy',
    date: '2023',
  },
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: '2022',
  },
]

export default function Education() {
  return (
    <SiteShell>
      <PageHero
        title="Education & Certifications"
        description="My academic background and professional certifications"
      />

      <section className="page-section">
        <div className="page-container max-w-4xl">
          <ScrollAnimation variant="fadeInUp">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Education
            </h2>
          </ScrollAnimation>

          <div className="space-y-8">
            {educationData.map((edu, idx) => (
              <ScrollAnimation
                key={edu.school}
                variant="slideInLeft"
                delay={idx * 0.1}
              >
                <div className="relative border-l-2 border-accent pb-8 pl-8">
                  <div
                    aria-hidden="true"
                    className="absolute -left-4 top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-accent"
                  >
                    <BookOpen className="h-4 w-4 text-accent-foreground" />
                  </div>

                  <GlassCard className="p-6 sm:p-8">
                    <div className="mb-2 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <Image
                          src={edu.schoolLogo}
                          alt={`${edu.school} Logo`}
                          className="mb-2 h-16 w-16 object-contain"
                        />
                        <h3 className="mb-1 text-2xl font-bold text-accent">
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-foreground">
                          {edu.school}
                        </p>
                        <p className="text-muted-foreground">{edu.field}</p>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar aria-hidden="true" className="h-4 w-4" />
                        <span className="text-sm">{edu.year}</span>
                      </div>
                    </div>

                    <p className="mb-4 text-muted-foreground">
                      {edu.description}
                    </p>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {edu.achievements.map((achievement) => (
                        <div
                          key={achievement}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Award
                            aria-hidden="true"
                            className="h-4 w-4 shrink-0 text-accent"
                          />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section glass-divider-x">
        <div className="page-container">
          <ScrollAnimation variant="fadeInUp">
            <h2 className="mb-12 text-3xl font-bold text-foreground">
              Professional Certifications
            </h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certifications.map((cert, idx) => (
              <ScrollAnimation key={cert.name} variant="scaleIn" delay={idx * 0.1}>
                <GlassCard interactive className="p-6 sm:p-8">
                  <div className="mb-3 flex items-start gap-4">
                    <span className="glass-icon size-12">
                      <Award aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <div className="flex-1">
                      <h3 className="mb-1 font-semibold text-foreground">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-accent">
                    Certified {cert.date}
                  </p>
                </GlassCard>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <ScrollAnimation
          variant="fadeInUp"
          className="page-container max-w-4xl text-center"
        >
          <GlassCard variant="strong" className="px-6 py-12 sm:px-12">
            <h2 className="mb-6 text-3xl font-bold text-foreground text-balance sm:text-4xl">
              Let&apos;s Work Together
            </h2>
            <p className="mb-8 text-lg text-muted-foreground text-balance">
              Interested in collaborating? Get in touch to discuss your next
              project.
            </p>
            <GlassLink href="/contact" variant="primary">
              Contact Me
            </GlassLink>
          </GlassCard>
        </ScrollAnimation>
      </section>
    </SiteShell>
  )
}
