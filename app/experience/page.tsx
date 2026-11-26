import type { Metadata } from "next";
import { Calendar, MapPin } from "lucide-react";

import { GlassCard } from "@/components/ui/glass-card";
import { PageHero } from "@/components/ui/page-hero";
import { SiteShell } from "@/components/ui/site-shell";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = createPageMetadata(
  "Work Experience",
  "My professional experience, roles, and hands-on engineering work.",
);

const experiences = [
  {
    title: "Junior Software Developer",
    company: "One World Information Technology.",
    location: "Morgan Tower, Phnom Penh, Cambodia",
    duration: "July 2026 - August 2026",
    description:
      "Develop odoo ERP Software to meet Cambodia Market and solve business owner problem",
    highlights: [
      "Using XML, python with FastAPI, and an Owl library, for database we use PostgreSQL and PostgRest for Rest API",
      "Using Docker in Ubuntu Linux distribution during working with dockercompose.yml for running container of application",
      "Build an Rest API using postgrest web server with database postgreSQL",
      "Using GitHub for version control and GitHub Actions for CI/CD and distribute with team members",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <SiteShell>
      <PageHero
        title="Work Experience"
        description="A journey of growth, innovation, and impactful contributions"
      />

      <section className="page-section">
        <div className="page-container max-w-4xl">
          <div className="relative space-y-12">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-1 bg-accent/70 md:left-1/2 md:-translate-x-1/2"
            />

            {experiences.map((exp) => (
              <div key={exp.company} className="relative md:flex md:gap-8">
                <div
                  aria-hidden="true"
                  className="absolute -translate-x-1.5 top-4 h-4 w-4 rounded-full bg-accent md:left-1/2 md:top-6 md:-translate-x-1/2"
                />

                <div className="pl-8 md:w-1/2 md:pl-0">
                  <GlassCard interactive className="p-6 sm:p-8">
                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="mb-3 text-lg font-semibold text-accent">
                      {exp.company}
                    </p>

                    <div className="mb-4 flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar aria-hidden="true" className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin aria-hidden="true" className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="mb-4 leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <h4 className="mb-3 text-sm font-semibold text-foreground">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
