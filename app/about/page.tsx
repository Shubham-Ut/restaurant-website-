import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"

export default function AboutPage() {
  return (
    <>
      <SiteNavbar />
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-16">
        <Reveal>
          <h1 className="font-serif text-4xl md:text-5xl">Our Story</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Maison Élan is a neighborhood bistro rooted in seasonality and simplicity. We cook with integrity, pour with
            curiosity, and host with warmth.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="rounded-xl border overflow-hidden">
              <img src="/chef-portrait-in-natural-light.jpg" alt="Chef portrait" className="w-full h-auto" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="prose max-w-none">
              <p>
                Our kitchen celebrates local farms, coastal fisheries, and artisans. The menu shifts with the weather
                and features a concise selection of plates designed for sharing.
              </p>
              <p>The wine list leans natural and balanced, highlighting producers who farm with care.</p>
            </div>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
