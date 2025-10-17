import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "@/components/reveal"

export default function ContactPage() {
  return (
    <>
      <SiteNavbar />
      <main className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <Reveal>
          <h1 className="font-serif text-4xl md:text-5xl">Contact</h1>
          <p className="mt-3 text-muted-foreground">Questions, events, or partnerships? We’d love to hear from you.</p>
        </Reveal>

        <form className="mt-10 grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="cname">Name</Label>
              <Input id="cname" name="name" />
            </div>
            <div>
              <Label htmlFor="cemail">Email</Label>
              <Input id="cemail" name="email" type="email" />
            </div>
          </div>
          <div>
            <Label htmlFor="cmsg">Message</Label>
            <Textarea id="cmsg" name="message" rows={5} />
          </div>
          <Button type="submit" className="rounded-full">
            Send
          </Button>
        </form>

        <Reveal>
          <div className="mt-12 grid gap-4 text-sm text-muted-foreground">
            <p>Address: 123 Market Street, City</p>
            <p>Email: hello@maisone lan.com • Phone: +1 (555) 123‑4567</p>
          </div>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  )
}
