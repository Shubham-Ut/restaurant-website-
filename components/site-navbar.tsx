"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function SiteNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="mx-auto max-w-6xl px-4 md:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wide">
          Maison Élan
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm hover:text-primary transition-colors">
              {l.label}
            </Link>
          ))}
          <Button asChild className="rounded-full">
            <Link href="/reservations">Book a table</Link>
          </Button>
        </div>
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="sr-only">Menu</span>
          <div className="h-4 w-5 grid gap-1.5">
            <span className="block h-[2px] w-full bg-foreground" />
            <span className="block h-[2px] w-3/4 bg-foreground" />
            <span className="block h-[2px] w-1/2 bg-foreground" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t"
          >
            <div className="mx-auto max-w-6xl px-4 py-3 grid gap-3">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="py-1 text-base" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Button asChild className="w-full rounded-full">
                <Link href="/reservations" onClick={() => setOpen(false)}>
                  Book a table
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
