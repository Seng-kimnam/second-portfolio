import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-balance mb-4">
              Professional Profile
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Get to know me better and discover what drives my work
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Sidebar */}
              <div className="md:col-span-1">
                {/* Avatar */}
                <div className="mb-8">
                  <div className="w-full aspect-square bg-muted rounded-xl flex items-center justify-center text-6xl mb-6">
                    <img
                      src="/me-at-smart-start.jpg"
                      alt="Avatar"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">
                    Contact Information
                  </h3>
                  <div className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors">
                    <Mail className="w-5 h-5 shrink-0" />
                    <a href="mailto:sengkimnam97@gmail.com" className="text-sm">
                      sengkimnam97@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="w-5 h-5 shrink-0" />
                    <p className="text-sm">+855 (0) 87-727-254</p>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm">Phnom Penh, Cambodia</p>
                  </div>
                </div>

                {/* Download CV */}
                <Link
                  href="https://drive.google.com/file/d/1sBWhlw8STxw3qpPA2dQEzuYwvrAaG0OP/view?usp=sharing"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity mb-8"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </Link>

                {/* Languages */}
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-foreground mb-4">
                    Languages
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Khmer - Native</li>
                    <li>English - Upper-Intermediate</li>
                  </ul>
                </div>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                {/* Bio */}
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    About Me
                  </h2>
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

                {/* Philosophy */}
                <div className="p-6 bg-muted rounded-lg border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    My Philosophy
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "User-centric design - Always start with understanding the user",
                      "Simplicity through complexity - Make complicated things simple",
                      "Continuous learning - Stay updated with latest trends and technologies",
                      "Collaboration - Great results come from diverse perspectives",
                      "Quality over quantity - Every project deserves excellence",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Overview */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Core Competencies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Front-End Development",
                        desc: "Creating responsive and interactive user interfaces",
                      },
                      {
                        title: "Back-End Development",
                        desc: "Building robust server-side applications and APIs",
                      },
                      {
                        title: "Software Development",
                        desc: "Designing and implementing scalable software solutions",
                      },
                      {
                        title: "Cloud Computing & DevOps",
                        desc: "Deploying and managing applications in cloud environments",
                      },
                    ].map((comp, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-background border border-border rounded-lg hover:border-accent transition-colors"
                      >
                        <h4 className="font-semibold text-foreground mb-2">
                          {comp.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {comp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fun Facts */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Fun Facts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "- I enjoy building full-stack web applications.",
                      "- Always learning new technologies and frameworks.",
                      "- I love exploring AI tools to boost development.",
                      "- Debugging is like solving a puzzle I enjoy the challenge.",
                      "- I believe every project is a chance to learn something new.",
                      "- My goal is to become a skilled software engineer.",
                    ].map((fact, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">
                        {fact}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
