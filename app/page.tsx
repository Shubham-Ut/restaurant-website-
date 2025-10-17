import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 pt-16 pb-12">
          <Reveal>
            <h1 className="font-serif text-balance text-4xl md:text-6xl tracking-tight">
              Seasonal cuisine meets exquisite craft
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              A modern bistro celebrating locally sourced ingredients, natural wines, and the simple joy of gathering.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex items-center gap-3">
              <Button asChild className="rounded-full">
                <Link href="/reservations">Book a table</Link>
              </Button>
              <Button asChild variant="ghost" className="rounded-full">
                <Link href="/menu">View menu</Link>
              </Button>
            </div>
          </Reveal>

          {/* Feature image */}
          <Reveal delay={0.25}>
            <div className="mt-10 overflow-hidden rounded-xl border">
              <img src="/chef-plating-seasonal-dish-in-a-refined-kitchen.jpg" alt="Plating a seasonal dish" className="w-full h-auto" />
            </div>
          </Reveal>
        </section>

        {/* Highlights */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-12 grid gap-8 md:grid-cols-3">
          {[
            { title: "Seasonal menu", copy: "A concise list that evolves weekly to honor the best of the market." },
            {
              title: "Natural wines",
              copy: "Small producers, pure expression. Curated bottles and thoughtful pairings.",
            },
            { title: "Warm service", copy: "A relaxed, attentive experience from arrival to last sip." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="rounded-xl border p-6">
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="text-sm mt-2 text-muted-foreground">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Callout */}
        <section className="mx-auto max-w-6xl px-4 md:px-6 py-16">
          <Reveal>
            <div className="rounded-2xl border p-8 md:p-12 bg-accent">
              <h2 className="font-serif text-3xl md:text-4xl">Join us this weekend</h2>
              <p className="mt-3 text-muted-foreground">
                Limited tables available. Reserve yours for an unhurried evening.
              </p>
              <div className="mt-6">
                <Button asChild className="rounded-full">
                  <Link href="/reservations">Reserve now</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
