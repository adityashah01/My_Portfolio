"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => setSubmitStatus("idle"), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Get In Touch
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Me</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new
            opportunities and ideas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="border-2 border-primary/20 p-6 shadow-lg shadow-primary/5">
              <h2 className="mb-6 text-xl font-bold">Contact Information</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:aditya@example.com" className="text-sm text-muted-foreground hover:text-primary">
                      aditya@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+97798XXXXXXXX" className="text-sm text-muted-foreground hover:text-primary">
                      +977 98XXXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="border-2 border-primary/20 p-6 shadow-lg shadow-primary/5">
              <h2 className="mb-6 text-xl font-bold">Social Links</h2>

              <div className="space-y-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-primary hover:bg-primary/5"
                >
                  <Github className="h-5 w-5" />
                  <span className="font-medium">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg border border-border p-3 transition-all hover:border-primary hover:bg-primary/5"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-primary/20 p-6 lg:col-span-2 shadow-lg shadow-primary/5">
            <h2 className="mb-6 text-xl font-bold">Send Me a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me more about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-500/10 p-4 text-sm text-green-600 dark:text-green-400">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="rounded-lg bg-destructive/10 p-4 text-sm text-destructive">
                  Something went wrong. Please try again later.
                </div>
              )}

              <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 border-2 border-dashed border-primary/30 p-8 text-center shadow-lg shadow-primary/5">
          <h2 className="mb-3 text-2xl font-bold">Looking for Opportunities</h2>
          <p className="mb-6 text-muted-foreground">
            I'm currently seeking internship and entry-level positions in software development. If you have an
            opportunity that matches my skills, I'd love to hear from you!
          </p>
          <Button size="lg" asChild>
            <a href="/resume">View My Resume</a>
          </Button>
        </Card>
      </div>
    </div>
  )
}
