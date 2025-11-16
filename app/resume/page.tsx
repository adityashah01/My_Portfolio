import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Mail, Phone, MapPin, Calendar, GraduationCap, Award, Code } from "lucide-react"
import Image from "next/image"
import { MatrixBackground } from "@/components/matrix-background"

export default function ResumePage() {
  return (
    <>
      <MatrixBackground />
      <div className="container relative z-10 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* Header Section with Profile */}
          <Card className="mb-8 overflow-hidden border-2 border-primary/20 shadow-xl shadow-primary/10">
            <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 p-8">
              <div className="absolute right-0 top-0 h-64 w-64 bg-gradient-to-br from-primary/20 to-transparent blur-3xl"></div>
              <div className="relative flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 blur-xl"></div>
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/50 bg-muted shadow-2xl shadow-primary/30 ring-4 ring-primary/10">
                    <Image src="/profile.jpg" alt="Aditya Raj Shah" fill className="object-cover" />
                  </div>
                </div>

                {/* Header Info */}
                <div className="flex-1 text-center md:text-left">
                  <h1 className="mb-2 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                    Aditya Raj Shah
                  </h1>
                  <p className="mb-4 text-lg text-muted-foreground">Computer Engineering Student</p>

                  <div className="mb-4 flex flex-wrap justify-center gap-3 md:justify-start">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>aditya.shh15@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <span>+977 9703900903</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>Kathmandu, Nepal</span>
                    </div>
                  </div>

                  <Button className="gap-2 shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
  asChild
>
  <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" download>
    <Download className="h-4 w-4" />
    Download Resume
  </a>
</Button>

                </div>
              </div>
            </div>
          </Card>

          {/* Education Section */}
          <Card className="mb-8 border-2 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>

            <div className="space-y-6">
              <div className="relative border-l-2 border-primary/20 pl-6">
                <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-primary bg-background"></div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold">Bachelor in Computer Engineering</h3>
                  <Badge variant="secondary">In Progress</Badge>
                </div>
                <p className="mb-2 font-medium text-primary">Nepal College of Information Technology (NCIT)</p>
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Currently in 5th Semester</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Pursuing a comprehensive education in computer engineering, focusing on software development,
                  algorithms, data structures, and modern web technologies.
                </p>
              </div>
            </div>
          </Card>

          {/* Skills Section */}
          <Card className="mb-8 border-2 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Code className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Technical Skills</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="mb-3 font-semibold text-muted-foreground">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "C++", "C", "Java"].map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold text-muted-foreground">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind CSS"].map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold text-muted-foreground">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["PostgreSQL", "Git", "GitHub", "VS Code"].map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold text-muted-foreground">Core Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Data Structures",
                    "Algorithms",
                    "Object-Oriented Programming",
                    "Web Development",
                    "Problem Solving",
                    "Team Collaboration",
                  ].map((skill) => (
                    <Badge key={skill} variant="outline" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements Section */}
          <Card className="mb-8 border-2 p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">Achievements & Activities</h2>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4 transition-colors hover:border-primary/50">
                <h3 className="mb-2 font-semibold">Academic Excellence</h3>
                <p className="text-sm text-muted-foreground">
                  Consistently maintaining strong academic performance throughout the computer engineering program
                </p>
              </div>

              <div className="rounded-lg border border-border p-4 transition-colors hover:border-primary/50">
                <h3 className="mb-2 font-semibold">Project Development</h3>
                <p className="text-sm text-muted-foreground">
                  Built multiple full-stack web applications and interactive games using modern technologies
                </p>
              </div>

              <div className="rounded-lg border border-border p-4 transition-colors hover:border-primary/50">
                <h3 className="mb-2 font-semibold">Technical Community</h3>
                <p className="text-sm text-muted-foreground">
                  Active participant in coding communities and collaborative development projects
                </p>
              </div>
            </div>
          </Card>

          {/* Interests Section */}
          <Card className="border-2 p-6">
            <h2 className="mb-4 text-2xl font-bold">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Web Development",
                "Game Development",
                "Artificial Intelligence",
                "Open Source",
                "Problem Solving",
                "Learning New Technologies",
              ].map((interest) => (
                <div
                  key={interest}
                  className="rounded-lg bg-primary/5 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10"
                >
                  {interest}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
