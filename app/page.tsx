import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Code2, Gamepad2, Briefcase, Mail, Download, Sparkles } from "lucide-react"
import { MatrixBackground } from "@/components/matrix-background"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <MatrixBackground />
      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 md:py-24">
        
        {/* Hero Section */}
        <section className="w-full max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-2xl"></div>
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-primary/50 shadow-2xl shadow-primary/30 ring-4 ring-primary/10">
                <Image src="/profile.jpg" alt="Aditya Raj Shah" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
            <Sparkles className="h-4 w-4" />
            Computer Engineering Student
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent">
              Aditya Raj Shah
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl">
            5th Semester Computer Engineering student at NCIT, passionate about building innovative solutions and
            exploring the intersection of code and creativity.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="group gap-2 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
            >
              <Link href="/contact">
                Hire Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 bg-background/50 backdrop-blur-sm transition-all hover:bg-background/80"
            >
              <Link href="/resume">View Resume</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 bg-background/50 backdrop-blur-sm transition-all hover:bg-background/80"
            >
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-24 w-full">
          <div className="grid gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            
            <Card className="h-full group relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
              <div className="absolute -right-10 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-2 ring-primary/20 transition-all group-hover:scale-110 group-hover:ring-primary/40">
                  <Code2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Resume</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Explore my academic journey, skills, and achievements
                </p>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card className="h-full group relative overflow-hidden border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent p-6 transition-all hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-500/10 blur-2xl transition-all group-hover:bg-purple-500/20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-500 ring-2 ring-purple-500/20 transition-all group-hover:scale-110 group-hover:ring-purple-500/40">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Projects</h3>
                <p className="mb-4 text-sm text-muted-foreground">Check out my latest work and technical projects</p>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-sm font-medium text-purple-500 transition-all group-hover:gap-2"
                >
                  View projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card className="h-full group relative overflow-hidden border-2 border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 to-transparent p-6 transition-all hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/10">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl transition-all group-hover:bg-emerald-500/20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 ring-2 ring-emerald-500/20 transition-all group-hover:scale-110 group-hover:ring-emerald-500/40">
                  <Gamepad2 className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Games</h3>
                <p className="mb-4 text-sm text-muted-foreground">Play interactive games built with modern web tech</p>
                <Link
                  href="/games"
                  className="inline-flex items-center gap-1 text-sm font-medium text-emerald-500 transition-all group-hover:gap-2"
                >
                  Play now <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

            <Card className="h-full group relative overflow-hidden border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent p-6 transition-all hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20"></div>
              <div className="relative">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 ring-2 ring-blue-500/20 transition-all group-hover:scale-110 group-hover:ring-blue-500/40">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Contact</h3>
                <p className="mb-4 text-sm text-muted-foreground">Get in touch for opportunities and collaborations</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 transition-all group-hover:gap-2"
                >
                  Reach out <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>

          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mt-24 w-full max-w-4xl text-center">
          <h2 className="mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-3xl font-bold text-transparent">
            Tech Stack
          </h2>
          <p className="mb-8 text-muted-foreground">Technologies and tools I work with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "C++",
              "PostgreSQL",
              "Git",
              "Tailwind CSS",
            ].map((tech) => (
              <div
                key={tech}
                className="group relative overflow-hidden rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
                <span className="relative">{tech}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
