"use client"

import { useState } from "react"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Reveal } from "@/components/reveal"

export default function ReservationsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function submit(formData: FormData) {
    setStatus("loading")
    const payload = Object.fromEntries(formData.entries())
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <Reveal>
          <h1 className="font-serif text-4xl md:text-5xl">Reservations</h1>
          <p className="mt-3 text-muted-foreground">Book your table below. We’ll confirm by email shortly.</p>
        </Reveal>

        <form action={async (fd) => submit(fd)} className="mt-10 grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input name="name" id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input name="email" id="email" type="email" required />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input name="date" id="date" type="date" required />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input name="time" id="time" type="time" required />
            </div>
            <div>
              <Label htmlFor="party">Party size</Label>
              <Input name="party" id="party" type="number" min={1} defaultValue={2} required />
            </div>
          </div>
          <div>
            <Label htmlFor="notes">Special requests</Label>
            <Textarea id="notes" name="notes" rows={4} placeholder="Allergies, celebrations, seating preferences..." />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === "loading"} className="rounded-full">
              {status === "loading" ? "Booking…" : "Book table"}
            </Button>
            {status === "success" && <p className="text-sm text-primary">Thank you! We will confirm shortly.</p>}
            {status === "error" && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
          </div>
        </form>

        <Reveal>
          <div className="mt-16 rounded-xl border overflow-hidden">
            <img src="/inviting-dining-room-with-warm-lighting-and-minima.jpg" alt="Dining room" className="w-full h-auto" />
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}
