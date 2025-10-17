import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl">Maison Élan</h3>
          <p className="text-sm mt-2 text-muted-foreground">Seasonal cuisine, natural wines, and warm hospitality.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Visit</h4>
          <p className="text-sm text-muted-foreground">
            123 Market Street, City
            <br />
            Tue–Sun: 12:00–22:00
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground">
            hello@maisone lan.com
            <br />
            +1 (555) 123‑4567
          </p>
          <div className="mt-3 flex gap-4 text-sm">
            <Link href="/reservations" className="underline">
              Book
            </Link>
            <Link href="/contact" className="underline">
              Contact
            </Link>
            <Link href="/about" className="underline">
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Maison Élan. All rights reserved.
      </div>
    </footer>
  )
}
