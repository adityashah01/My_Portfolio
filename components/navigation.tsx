"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/games", label: "Games" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="container relative flex h-16 items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all rounded-lg hover:bg-primary/10 ${
                pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
              )}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-primary/20 md:hidden backdrop-blur-xl bg-background/95">
          <div className="container space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-4 py-3 text-base font-medium transition-all ${
                  pathname === item.href
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
