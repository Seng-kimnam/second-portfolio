import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperiencePage() {
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
    // {
    //   title: 'Full Stack Developer & Designer',
    //   company: 'Creative Digital Studios',
    //   location: 'New York, NY',
    //   duration: '2019 - 2022',
    //   description: 'Designed and developed web applications for Fortune 500 companies. Managed cross-functional teams to deliver projects on time and within budget.',
    //   highlights: [
    //     'Developed 15+ web applications serving 100K+ users',
    //     'Reduced page load time by 60% through optimization',
    //     'Mentored 3 junior developers',
    //     'Won 2 industry awards for design excellence',
    //   ],
    // },
    // {
    //   title: 'UI/UX Designer',
    //   company: 'StartupHub Ventures',
    //   location: 'Austin, TX',
    //   duration: '2017 - 2019',
    //   description: 'Designed user interfaces for early-stage startups. Created wireframes, prototypes, and design systems for multiple projects.',
    //   highlights: [
    //     'Designed interfaces for 8 successful startups',
    //     'Increased user retention by 35% through UX improvements',
    //     'Created reusable component library',
    //     'Conducted competitive analysis and market research',
    //   ],
    // },
    // {
    //   title: 'Junior Web Developer',
    //   company: 'Digital Agency Pro',
    //   location: 'Los Angeles, CA',
    //   duration: '2015 - 2017',
    //   description: 'Built responsive websites and web applications. Collaborated with designers and clients to bring visions to life.',
    //   highlights: [
    //     'Developed 20+ client websites',
    //     'Mastered responsive design principles',
    //     'Improved site performance metrics',
    //     'Learned modern web development practices',
    //   ],
    // },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-muted border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-balance mb-4">
              Work Experience
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              A journey of growth, innovation, and impactful contributions
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative space-y-12">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-accent to-transparent transform md:-translate-x-1/2" />

              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`relative md:flex md:gap-8 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-4 w-4 h-4 bg-accent rounded-full transform -translate-x-1.5 md:left-1/2 md:-translate-x-1/2 md:top-6" />

                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0">
                    <div className="p-6 bg-muted rounded-lg border border-border hover:border-accent transition-colors">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-accent mb-3">
                          {exp.company}
                        </p>

                        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 text-sm">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-muted border-y border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Education
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  degree: "Bachelor of Science in Computer Science",
                  school: "State University",
                  year: "2015",
                  gpa: "3.8 GPA",
                },
                {
                  degree: "Master of Design (Human-Centered Design)",
                  school: "Design Institute",
                  year: "2018",
                  gpa: "4.0 GPA",
                },
              ].map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background rounded-lg border border-border"
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-semibold mb-2">{edu.school}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{edu.year}</span>
                    <span>{edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">By The Numbers</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: '8+', label: 'Years in Industry' },
                { number: '50+', label: 'Projects Delivered' },
                { number: '100+', label: 'Clients Served' },
                { number: '10+', label: 'Team Members Led' },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-muted rounded-lg border border-border text-center hover:border-accent transition-colors"
                >
                  <p className="text-4xl font-bold text-accent mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  );
}
