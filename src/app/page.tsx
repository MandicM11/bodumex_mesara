import Link from "next/link";
import { Truck, Store, ShieldCheck, Beef } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const HIGHLIGHTS = [
  {
    icon: Store,
    title: "Veleprodaja",
    text: "Snabdevamo najpoznatije trgovinske lance i restorane svežim mesom najvišeg kvaliteta, redovno i pouzdano.",
  },
  {
    icon: Truck,
    title: "Maloprodaja i dostava",
    text: "Dostavljamo sveže meso direktno na kućnu adresu — brzo, higijenski i u dogovoreno vreme.",
  },
  {
    icon: ShieldCheck,
    title: "Od 1992. godine",
    text: "Više od tri decenije iskustva u proizvodnji, trgovini i uslugama u mesnoj industriji.",
  },
];

const MEAT_TYPES = ["Juneće", "Teleće", "Svinjsko", "Jagnjeće"];

const PARTNERS = [
  "DIS",
  "Univerexport",
  "Fortuna",
  "Madera",
  "Frans",
  "Bottega",
  "Tri šešira",
  "Proleće",
  "Lafayette",
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/70">
        <div
          className="absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-primary) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Bodumex doo · Beograd
          </span>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Sveže meso, provereno poreklo, isporučeno na vreme.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Preduzeće za proizvodnju, unutrašnju i spoljnu trgovinu i usluge —
            na tržištu od 1992. godine. Veleprodaja i maloprodaja junećeg,
            telećeg, svinjskog i jagnjećeg mesa, sa dostavom na kućnu adresu.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/ponuda">Pogledajte ponudu</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/kontakt">Pošaljite upit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-2 size-7 text-primary" />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  {text}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* O NAMA TEASER */}
      <section className="border-y border-border/70 bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              O nama
            </span>
            <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
              Tradicija i poverenje u svakom komadu mesa
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              BODUMEX DOO se bavi nespecijalizovanom trgovinom na veliko.
              Pored veleprodaje mesa, kojom snabdevamo najpoznatije trgovinske
              lance i restorane u Beogradu, razvili smo i maloprodaju uz
              dostavu svežeg mesa direktno na kućnu adresu.
            </p>
            <Button asChild variant="link" className="mt-4 px-0">
              <Link href="/o-nama">Saznajte više o nama →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {MEAT_TYPES.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-md border border-border/70 bg-background px-5 py-6"
              >
                <Beef className="size-5 text-primary" />
                <span className="font-serif text-lg text-foreground">
                  {type} meso
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Poverenje
          </span>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Naši partneri i klijenti
          </h2>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {PARTNERS.map((name) => (
            <span
              key={name}
              className="font-serif text-lg tracking-wide text-muted-foreground transition-colors hover:text-primary sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/70 bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="max-w-2xl font-serif text-3xl text-foreground sm:text-4xl">
            Poručite sveže meso ili nas kontaktirajte za saradnju
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Bilo da ste trgovinski lanac, restoran ili domaćinstvo — tu smo za
            vas.
          </p>
          <Button asChild size="lg">
            <Link href="/kontakt">Kontaktirajte nas</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
