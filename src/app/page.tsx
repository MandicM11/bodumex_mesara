import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  Store,
  ShieldCheck,
  Beef,
  Drumstick,
  PiggyBank,
  PawPrint,
  ImageIcon,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { FadeIn } from "@/components/fade-in";
import { NameChip } from "@/components/name-chip";
import { CONTACT } from "@/lib/contact";

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

const MEAT_TYPES = [
  { name: "Juneće", icon: Beef },
  { name: "Teleće", icon: Drumstick },
  { name: "Svinjsko", icon: PiggyBank },
  { name: "Jagnjeće", icon: PawPrint },
];

// Placeholder galerija — slike stižu naknadno.
const GALLERY_PLACEHOLDER_COUNT = 8;

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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex flex-col items-start gap-6">
            <span className="text-base font-semibold uppercase tracking-[0.35em] text-primary sm:text-lg">
              Bodumex doo · Beograd
            </span>
            <h1 className="max-w-3xl font-serif text-4xl leading-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Sveže meso, provereno poreklo, isporučeno na vreme.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Preduzeće za proizvodnju, unutrašnju i spoljnu trgovinu i usluge
              — na tržištu od 1992. godine. Veleprodaja i maloprodaja
              junećeg, telećeg, svinjskog i jagnjećeg mesa, sa dostavom na
              kućnu adresu.
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

          <Image
            src="/logo.png"
            alt="BoduMex — sveže domaće meso"
            width={1024}
            height={1024}
            priority
            className="w-56 shrink-0 drop-shadow-[0_0_40px_rgba(193,89,42,0.15)] sm:w-72 lg:w-80"
          />
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="py-8">
              <CardHeader>
                <Icon className="mb-3 size-10 text-primary" />
                <CardTitle className="text-2xl">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
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
            {MEAT_TYPES.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-md border border-border/70 bg-background px-5 py-6"
              >
                <Icon className="size-5 text-primary" />
                <span className="font-serif text-lg text-foreground">
                  {name} meso
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Poverenje
          </span>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Naši partneri i klijenti
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PARTNERS.map((name, i) => (
            <NameChip key={name} name={name} delayMs={i * 60} />
          ))}
        </div>
      </section>

      {/* GALERIJA */}
      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {Array.from({ length: GALLERY_PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-md border border-dashed border-border bg-background text-muted-foreground"
              >
                <ImageIcon className="size-8 text-primary/60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/70 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#e08a3e] via-primary to-[#9c3a20] px-6 py-14 text-center shadow-[0_25px_70px_-20px_rgba(193,89,42,0.55)] sm:px-12 sm:py-16">
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                backgroundSize: "22px 22px",
              }}
              aria-hidden
            />
            <h2 className="relative font-sans text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
              Poručite sveže meso
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-white/90">
              Pozovite i poručite — sveže meso stiže direktno na vašu adresu.
            </p>

            <div className="relative mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-5" />
                {CONTACT.phoneDisplay}
              </a>
              <Button
                asChild
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/kontakt">Pošaljite upit</Link>
              </Button>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <MapPin className="size-4" />
                Beograd, Srbija
              </span>
              <span className="flex items-center gap-2">
                <Truck className="size-4" />
                Dostava na kućnu adresu
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
