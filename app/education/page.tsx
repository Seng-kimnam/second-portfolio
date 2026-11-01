"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";
import { motion } from "framer-motion";
import { Award, BookOpen, Calendar } from "lucide-react";
import dichiLogo from "@/public/dichi-logo.png";
import koreaLogo from "@/public/korea-hrd-logo.jpg";
import buildBrightLogo from "@/public/big_bbu_logo-removebg-preview.png";
import Image from "next/image";

const educationData = [
  {
    schoolLogo : dichiLogo,
    school: "Dichi Academy",
    degree: "Professional Certificate",
    field: "Full Stack Development and Enterpreneurship",
    year: "July 2026 - Present",
    description:
      `
      An intensive 7-month incubation program organized by Dichi Academy and Elix, designed to equip Cambodia's most promising university students with the technical expertise and entrepreneurial mindset needed to thrive in the digital economy. The program offers two tracks — Full Stack Development and AI & Data Science — combining 4 months of technical and soft skill training with 3 months of hands-on entrepreneurship incubation and MVP development. The program is fully scholarship-based with no cost to accepted participants.
      `,
    achievements: [
      "Introduction to Javascript",
      "Database and Entity Relation Diagrams",
      "Project Management & Git",
      "UXUI: Practical Designs",
      "Frontend Development with ReactJS",
      "Backend Development with NestJS",
    ],
  },
  {
    schoolLogo: buildBrightLogo,
    school: "Build Bright University, Phnom Penh, Cambodia",
    degree: "Bachelor of Science and Technology",
    field: "Information Technology",
    year: "2022-2026",
    description:
      "This program prepares students with the knowledge and practical skills needed to design, develop, manage, and support modern information technology systems. The curriculum combines computer science fundamentals with hands-on technical training, enabling graduates to solve real-world business and technological problems.",
    achievements: [
      "GPA: 3.66/4.0",
      "Law firm Management System Project",
      "Team lead on thesis project",
      "Scholarship 100% of tuition fees for 4 years from Bacll Grade A",
    ],
  },
  {
    schoolLogo: koreaLogo,
    school: "Korea Software HRD Center, Phnom Penh, Cambodia",
    degree: "Professional Certificate",
    field: "Full Stack Web Development",
    year: "February 2025 - June 2025",
    description: `
      Training period of basic course in 5months from 8:00 AM to 5:00AM. In Basic Course we will train student to become fullstack web developer. The goal of basic course is to understand the key concepts of the technologies and improve the implementation skills. We motivate students to practice more by giving homework and assignments, which could help them improve the understanding and implementation skills.
      `,
    achievements: [
      "Frontend Developer in team",
      "Build Room Renting Management System Project",
      "Design System Features with Figjam",
      "Research and Create slide about java lesson ",
    ],
  },
];

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
  },
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2023",
  },
  {
    name: "Figma Advanced Certification",
    issuer: "Figma Academy",
    date: "2023",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2022",
  },
];

export default function Education() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-muted border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-balance mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Education & Certifications
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              My academic background and professional certifications
            </motion.p>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl font-bold text-foreground mb-12">
                Education
              </h2>
            </ScrollAnimation>

            <div className="space-y-8">
              {educationData.map((edu, idx) => (
                <ScrollAnimation
                  key={idx}
                  variant="slideInLeft"
                  delay={idx * 0.1}
                >
                  <motion.div
                    className="relative pl-8 pb-8 border-l-2 border-accent"
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute -left-4 top-0 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                    >
                      <BookOpen className="w-4 h-4 text-background" />
                    </motion.div>

                    <div className="bg-muted rounded-lg p-6 border border-border">
                      
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <Image src={edu.schoolLogo} alt={`${edu.school} Logo`} className="w-16 h-16 object-contain mt-2" />
                          <h3 className="text-2xl font-bold text-accent mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-foreground">
                            {edu.school}
                          </p>
                          <p className="text-muted-foreground mb-2">
                            {edu.field}
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{edu.year}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {edu.achievements.map((achievement, aidx) => (
                          <motion.div
                            key={aidx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: aidx * 0.05 }}
                          >
                            <Award className="w-4 h-4 text-accent shrink-0" />
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <ScrollAnimation variant="fadeInUp">
              <h2 className="text-3xl font-bold text-foreground mb-12">
                Professional Certifications
              </h2>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <ScrollAnimation key={idx} variant="scaleIn" delay={idx * 0.1}>
                  <motion.div
                    className="p-6 bg-background rounded-lg border border-border"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px rgba(31, 153, 84, 0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <motion.div
                        className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Award className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>
                    <motion.p
                      className="text-xs text-accent font-semibold"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      Certified {cert.date}
                    </motion.p>
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <ScrollAnimation
            variant="fadeInUp"
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let&apos;s Work Together
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8 text-balance"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Interested in collaborating? Get in touch to discuss your next
              project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.a
                href="/contact"
                className="inline-flex px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </ScrollAnimation>
        </section>
      </main>
      <Footer />
    </>
  );
}
