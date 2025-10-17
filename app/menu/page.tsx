import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"

type Dish = { name: string; desc: string; price: string }

const starters: Dish[] = [
  { name: "Oysters, lemon & dill", desc: "Daily selection, mignonette", price: "18" },
  { name: "Burrata & stone fruit", desc: "Wild honey, basil oil", price: "16" },
]

const mains: Dish[] = [
  { name: "Seared sea bass", desc: "Fennel, citrus beurre blanc", price: "32" },
  { name: "Heritage chicken", desc: "Charred leeks, jus", price: "28" },
]

const desserts: Dish[] = [
  { name: "Olive oil cake", desc: "Citrus glaze, crème fraîche", price: "12" },
  { name: "Dark chocolate mousse", desc: "Sea salt, hazelnut praline", price: "12" },
]

function Section({ title, items }: { title: string; items: Dish[] }) {
  return (
    <Reveal>
      <div>
        <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
        <ul className="mt-6 grid gap-4">
          {items.map((d) => (
            <li key={d.name} className="flex items-start justify-between border-b pb-4">
              <div>
                <p className="font-medium">{d.name}</p>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </div>
              <span className="text-sm tabular-nums">$ {d.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default function MenuPage() {
  return (
    <>
      <SiteNavbar />
      <main className="mx-auto max-w-6xl px-4 md:px-6 py-16">
        <Reveal>
          <h1 className="font-serif text-4xl md:text-5xl">Menu</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Our menu shifts with the seasons and arrivals from local farms and fishers.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <Section title="Starters" items={starters} />
          <Section title="Mains" items={mains} />
        </div>

        <div className="mt-12">
          <Section title="Desserts" items={desserts} />
        </div>

        <Reveal>
          <div className="mt-16 overflow-hidden rounded-xl border">
            <img src="/beautiful-plated-entree-in-a-minimal-restaurant-st.jpg" alt="Seasonal dish" className="w-full h-auto" />
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}
