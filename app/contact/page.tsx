"use client"

import { useState } from "react"
import emailjs from "emailjs-com"
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
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  // ✅ Hardcoded EmailJS keys for testing
  const SERVICE_ID = "service_jq8ywvp"
  const TEMPLATE_ID = "template_ox9d0t1"
  const AUTOREPLY_TEMPLATE_ID = "template_z4a6cmm"
  const PUBLIC_KEY = "vnPr6j_GbuGbA_KCo"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    const templateParams = { ...formData }

    try {
      // Send message to yourself
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      console.log("Form email sent successfully")

      // Send auto-reply to user
      await emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, templateParams, PUBLIC_KEY)
      console.log("Auto-reply sent successfully")

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch (error: any) {
      console.error("EmailJS error:", error)
      setErrorMessage(error.text || "Failed to send email. Check console for details.")
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
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
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Get In Touch
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Me</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-1">
            <Card className="border-2 border-primary/20 p-6 shadow-lg shadow-primary/5">
              <h2 className="mb-6 text-xl font-bold">Contact Info</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:aditya.shh15@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                      aditya.shh15@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+9779703900903" className="text-sm text-muted-foreground hover:text-primary">
                      +977 9703900903
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
          </div>

          {/* Contact Form */}
          <Card className="border-2 border-primary/20 p-6 lg:col-span-2 shadow-lg shadow-primary/5">
            <h2 className="mb-6 text-xl font-bold">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" placeholder="What's this about?" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="Tell me more..." rows={6} value={formData.message} onChange={handleChange} required />
              </div>

              {submitStatus === "success" && (
                <div className="rounded-lg bg-green-500/10 p-4 text-sm text-green-600">
                  ✅ Thank you for your message! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="rounded-lg bg-red-500/10 p-4 text-sm text-red-600">
                  ❌ {errorMessage || "Something went wrong. Check console for details."}
                </div>
              )}

              <Button type="submit" size="lg" className="w-full gap-2 sm:w-auto" disabled={isSubmitting}>
                {isSubmitting ? <>Sending...</> : <><Send className="h-4 w-4" /> Send Message</>}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
