"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Design",
      skills: [
        { name: "UI/UX Design", level: 95 },
        { name: "Figma", level: 95 },
        { name: "WordPress", level: 90 },
        { name: "Variant", level: 92 },
        { name: "User Research", level: 88 },
        { name: "ThemeSINE", level: 93 },
      ],
    },
    {
      title: "Development",
      skills: [
        { name: "React & Next.js", level: 94 },
        { name: "Java Spring Boot", level: 94 },

        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },

        { name: "Responsive Design", level: 96 },
        { name: "Web APIs", level: 90 },
      ],
    },
    {
      title: "Strategy & Management",
      skills: [
        { name: "Project Management", level: 90 },
        { name: "Monolithic Architecture", level: 89 },
        { name: "Design Systems", level: 88 },
        { name: "Normalization & ERD", level: 91 },
        { name: "Agile Methodology", level: 91 },
        { name: "Team Leadership", level: 87 },
        { name: "Problem Solving", level: 94 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Vs Code & Codex", level: 85 },
        { name: "IntelliJ IDEA", level: 88 },
        { name: "Android Studio", level: 84 },

        { name: "Claude Code", level: 90 },
        { name: "Ubuntu", level: 84 },

        { name: "Docker", level: 78 },
      ],
    },
  ];

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
              Skills & Expertise
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              A comprehensive overview of my technical and creative capabilities
            </motion.p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {skillCategories.map((category, categoryIndex) => (
                <ScrollAnimation
                  key={category.title}
                  variant="fadeInUp"
                  delay={categoryIndex * 0.1}
                >
                  <div className="space-y-8">
                    <motion.h2
                      className="text-3xl font-bold text-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      {category.title}
                    </motion.h2>

                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: skillIndex * 0.05,
                          }}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <h3 className="font-semibold text-foreground">
                              {skill.name}
                            </h3>
                            <motion.span
                              className="text-sm font-bold text-accent bg-accent/10 px-2 py-1 rounded"
                              whileInView={{ scale: 1.05 }}
                              viewport={{ once: true }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-3 overflow-hidden border border-border/50">
                            <motion.div
                              className="bg-linear-to-r from-accent via-accent to-accent/80 rounded-full h-3 shadow-lg shadow-accent/20 relative"
                              initial={{ width: "0%" }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1.2,
                                delay: 0.2 + skillIndex * 0.05,
                                ease: "easeOut",
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-white/20 rounded-full"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Skills */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Additional Skills
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Beyond the main categories, I also have experience with various
                specialized skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  category: "Frontend Technologies",
                  items: ["React", "Next.js", "Flutter" , "React Native", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "Material-UI", "Shadcn UI", "Framer Motion", "Redux Toolkit", "Zustand", "Jest", "PWA" ,"Expo"],
                },
                {
                  category: "Backend Technologies",
                  items: ["Node.js", "Express","NestJs", "SQLite", "PostgreSQL", "MongoDB", "Firebase","Rest API", "GraphQL", "PHP Laravel", "Java Spring Boot", "MySQL", "Redis", "Docker", "JWT", "OAuth2", "WebSockets","RabbitMQ"],
                },
                {
                  category: "Design Principles",
                  items: [
                    "Atomic Design",
                    "Design Systems",
                    "Accessibility",
                    "Design Thinking",
                  ],
                },
                {
                  category: "Soft Skills",
                  items: [
                    "Communication",
                    "Collaboration",
                    "Adaptability",
                    "Time Management",
                    "Discipline",
                  ],
                },
              ].map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <h3 className="font-semibold text-foreground mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Learning */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Certifications & Continuous Learning
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Google UX Design Professional Certificate",
                  issuer: "Google | Coursera",
                  year: "2023",
                },
                {
                  title: "Advanced React Development",
                  issuer: "Frontend Masters",
                  year: "2023",
                },
                {
                  title: "Web Performance Optimization",
                  issuer: "Web.dev by Google",
                  year: "2022",
                }, 
                {
                  title: "Design Systems Masterclass",
                  issuer: "Interaction Design Foundation",
                  year: "2022",
                },
                {
                  title: "AWS Cloud Practitioner",
                  issuer: "Amazon Web Services",
                  year: "2021",
                },
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-background border border-border rounded-lg hover:border-accent transition-colors flex items-start justify-between"
                >
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-accent shrink-0">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
