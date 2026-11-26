"use client";

import { ArrowRight } from "lucide-react";

import { ScrollAnimation } from "@/components/scroll-animation";
import { GlassBackground } from "@/components/ui/glass-background";
import { GlassCard } from "@/components/ui/glass-card";
import { GlassLink } from "@/components/ui/glass-button";
import { SiteShell } from "@/components/ui/site-shell";

const stats = [
  { label: "Projects Completed", value: "4" },
  { label: "Years Experience", value: "1+" },
  { label: "Programs Learned", value: "6" },
];

const features = [
  {
    title: "My Approach",
    description:
      "I believe great software starts with understanding real user needs. I focus on building fast, intuitive, and maintainable web applications by combining thoughtful design, clean architecture, and modern development practices.",
  },
  {
    title: "Specialization",
    description:
      "Full-Stack Web Development, RESTful API Development, Responsive Web Applications, and Database Design. I primarily work with Next.js, NestJS, React, TypeScript, Java Spring Boot, PostgreSQL, MongoDB, Tailwind CSS, Prisma, and SQLite.",
  },
  {
    title: "Development Philosophy",
    description:
      "I value clean code, thoughtful architecture, and intuitive user experiences. By combining modern technologies with best practices, I build applications that are reliable, maintainable, and ready for future growth.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <section aria-labelledby="home-hero-title">
        <GlassBackground className="flex min-h-[calc(100svh-5rem)] items-center py-14 sm:py-16">
          <div className="page-container">
            <GlassCard className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:p-14">
              <div className="home-hero-enter space-y-8">
                <div className="space-y-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Welcome to my portfolio
                  </p>
                  <h1
                    id="home-hero-title"
                    className="text-3xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
                  >
                    Creative Designer
                    <span className="block whitespace-nowrap">
                      &amp; Developer
                    </span>
                  </h1>
                  <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    I craft beautiful, functional digital experiences that solve
                    real problems and delight users. Let&apos;s create something
                    amazing together.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <GlassLink href="/contact" variant="primary">
                    Get in Touch
                    <ArrowRight aria-hidden="true" className="h-5 w-5" />
                  </GlassLink>
                  <GlassLink href="/portfolio" variant="secondary">
                    View My Work
                  </GlassLink>
                </div>

                <div className="glass-divider-top grid grid-cols-3 gap-4 pt-6 sm:gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-bold text-foreground sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <GlassCard className="mx-auto aspect-4/5 w-full max-w-sm overflow-hidden p-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/my_pic.jpg"
                  alt="Seng Kimnam"
                  className="h-full w-full object-cover"
                />
              </GlassCard>
            </GlassCard>
          </div>
        </GlassBackground>
      </section>

      <section aria-labelledby="features-title">
        <GlassBackground className="page-section">
          <div className="page-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2
                id="features-title"
                className="text-3xl font-bold text-foreground text-balance sm:text-4xl"
              >
                What I Bring to Your Project
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                I&apos;m a Full-Stack Developer passionate about creating clean,
                responsive, and scalable web applications. I combine strategic
                thinking, creative design, and technical excellence to deliver
                thoughtful user experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((feature, index) => (
                <ScrollAnimation
                  key={feature.title}
                  variant="fadeInUp"
                  delay={index * 0.1}
                >
                  <GlassCard className="h-full p-6 sm:p-8">
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </GlassCard>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </GlassBackground>
      </section>

      <section className="page-section">
        <ScrollAnimation
          variant="fadeInUp"
          className="page-container text-center"
        >
          <h2 className="mb-6 text-4xl font-bold text-foreground text-balance sm:text-5xl">
            Would you like to keep in touch with me?
          </h2>
          <p className="mb-8 text-xl text-muted-foreground text-balance">
            Let&apos;s work together to create something extraordinary
          </p>
          <GlassLink href="/contact" variant="primary">
            Contact Me
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </GlassLink>
        </ScrollAnimation>
      </section>
    </SiteShell>
  );
}
