"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="space-y-4">
                  <motion.p
                    className="text-accent font-semibold text-sm uppercase tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    Welcome to my portfolio
                  </motion.p>
                  <motion.h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    Creative Designer & Developer
                  </motion.h1>
                  <motion.p
                    className="text-xl text-muted-foreground text-balance leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    I craft beautiful, functional digital experiences that solve
                    real problems and delight users. Let&apos;s create something
                    amazing together.
                  </motion.p>
                </div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Get in Touch
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
                    >
                      View My Work
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="grid grid-cols-3 gap-6 pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.6,
                    staggerChildren: 0.1,
                  }}
                >
                  {[
                    { label: "Projects Completed", value: "4" },
                    { label: "Years Experience", value: "1+" },
                    { label: "Program I have learnt", value: "6" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                    >
                      <p className="text-3xl font-bold text-foreground">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Content - Profile Image Placeholder */}
              <motion.div
                className="relative h-96 md:h-full min-h-96 bg-[#380954d1]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-accent/20 to-accent/5 rounded-2xl"
                  whileHover={{ boxShadow: "0 20px 60px " }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-muted-foreground"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="text-6xl mb-4"
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                      }}
                    >
                      <img
                        src="/my_pic.jpg"
                        alt="My professional image"
                        className="h-96 w-80 "
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollAnimation variant="slideInLeft">
                <div>
                  <h2 className="text-4xl font-bold mb-6">About Me</h2>
                  <p className="text-lg text-muted-foreground  leading-relaxed">
                    I'm a Full-Stack Developer passionate about creating clean,
                    responsive, and scalable web applications. I enjoy solving
                    real-world problems through technology and continuously
                    expanding my skills in modern web development.
                  </p>
                  <p className="text-lg text-muted-foreground my-4 leading-relaxed">
                    My primary stack includes HTML, CSS, JavaScript, Tailwind
                    CSS, React, Next.js, TypeScript, Node.js, Express.js, NestJS
                    and I have experience with PHP Laravel, Java Spring Boot,
                    SQLite, MySQL, PostgreSQL and MongoDB. I'm always eager to
                    learn new technologies, take on challenging projects, and
                    build software that delivers a great user experience.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    My approach combines strategic thinking, creative design,
                    and technical excellence to deliver solutions that not only
                    look great but also drive results.
                  </p>
                </div>
              </ScrollAnimation>

              <div className="space-y-6">
                <ScrollAnimation variant="slideInRight" delay={0.1}>
                  <motion.div
                    className="p-6 bg-background rounded-lg border border-border"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-foreground mb-2">
                      My Approach
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      I believe great software starts with understanding real
                      user needs. I focus on building fast, intuitive, and
                      maintainable web applications by combining thoughtful
                      design, clean architecture, and modern development
                      practices.
                    </p>
                  </motion.div>
                </ScrollAnimation>
                <ScrollAnimation variant="slideInRight" delay={0.2}>
                  <motion.div
                    className="p-6 bg-background rounded-lg border border-border"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-foreground mb-2">
                      Specialization
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Full-Stack Web Development, RESTful API Development,
                      Responsive Web Applications, and Database Design. I
                      primarily work with Next.js, NestJS, React, TypeScript,
                      Java Spring Boot, PostgreSQL, and MongoDB, Tailwind CSS,
                      Prisma, and SQLite to create scalable and high-performance
                      applications.
                    </p>
                  </motion.div>
                </ScrollAnimation>
                <ScrollAnimation variant="slideInRight" delay={0.2}>
                  <motion.div
                    className="p-6 bg-background rounded-lg border border-border"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-semibold text-foreground mb-2">
                      Development Philosophy
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      I value clean code, thoughtful architecture, and intuitive
                      user experiences. By combining modern technologies with
                      best practices, I build applications that are reliable,
                      maintainable, and ready for future growth.
                    </p>
                  </motion.div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <ScrollAnimation
            variant="fadeInUp"
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Would you like to keep in touch with me?
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-8 text-balance"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Let&apos;s work together to create something extraordinary
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </ScrollAnimation>
        </section>
      </main>

      <Footer />
    </div>
  );
}
