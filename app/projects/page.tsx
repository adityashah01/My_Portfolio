import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Folder } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-state Platform",
    description:
      "A full-stack e-state web application with user authentication, properies, shopping cart, and payment integration. Built with modern web technologies for optimal performance.",
    image: "/estate.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    date: "2025",
    github: "https://github.com/adityashah01/estate",
    demo: "https://estate-kappa-puce.vercel.app/",
  },
  {
    title: "Construction company",
    description:
      "A full-service construction company specializing in residential, commercial, and infrastructure projects. Offers end-to-end solutions from design and planning to execution and project management, ensuring quality, safety, and on-time delivery.",
    image: "/construction.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    date: "2024",
    github: "https://github.com/adityashah01/Energetic-nepal",
    demo: "https://energetic-nepal.vercel.app/",
  },
  {
    title: "QR Generator",
    description:
      "A responsive QR Code Generator that allows users to instantly create and download QR codes for text, URLs, and more. Features a sleek, modern UI with real-time QR previews.",
    image: "/qr.png",
    technologies: ["Node.js"],
    date: "2025",
    github: "https://github.com/adityashah01/qr_code-generator",
    demo: "https://qr-code-generator-cyan-two.vercel.app",
  },
  {
    title: "90's Simon Game",
    description:
      "A fun and interactive memory game inspired by the classic 90s Simon electronic toy.Players must repeat an increasingly complex sequence of colored button presses and sounds — testing memory, focus, and reflexes. Each round adds a new step to the pattern, and the challenge continues until the player makes a mistake.",
    image: "/simon.png",
    technologies: ["Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React.js"],
    date: "2023",
    github: "https://github.com/adityashah01/Simon_Game",
    demo: "https://simon-game-three-delta.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects, skills, and achievements. Features dark mode, interactive games, and smooth animations.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    date: "2024",
    github: "https://github.com/adityashah01/My_Portfolio",
    demo: "https://www.adityarajshah.com.np",
  },
  
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-6 py-16 text-center flex flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl w-full">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
            <Folder className="h-4 w-4" />
            My Work
          </div>
          <h1 className="mb-4 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Projects
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A collection of projects I've built during my journey as a Computer Engineering student, showcasing my
            skills in web development and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-stretch">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col h-full w-full group relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-purple-500/5 opacity-0 transition-opacity group-hover:opacity-100"></div>

              {/* Project Image */}
              <div className="relative h-52 overflow-hidden bg-muted">
                <Image
  src={
    project.image && project.image.trim() !== "" && (project.image.startsWith('/') || project.image.startsWith('http'))
      ? project.image
      : "/placeholder.svg"
  }
  alt={project.title}
  fill
/>

                <div className="absolute right-3 top-3">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {project.date}
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="relative p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-balance">{project.title}</h3>
                    <div className="flex shrink-0 items-center gap-1 text-primary">
                      <Folder className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-muted-foreground text-pretty">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-4 flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 gap-2 shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 gap-2 bg-background/50 backdrop-blur-sm"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card className="relative overflow-hidden border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-10">
            <div className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 bg-primary/20 blur-3xl"></div>
            <div className="relative">
              <h2 className="mb-3 text-2xl font-bold">Want to see more?</h2>
              <p className="mb-6 text-muted-foreground">
                Check out my GitHub profile for more projects and contributions.
              </p>
              <Button
                size="lg"
                className="gap-2 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
                asChild
              >
                <a href="https://github.com/adityashah01" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  Visit GitHub Profile
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
