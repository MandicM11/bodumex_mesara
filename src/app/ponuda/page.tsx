import type { Metadata } from "next";
import Link from "next/link";
import { Beef, Truck, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Ponuda",
  description:
    "Ponuda BODUMEX DOO — juneće, teleće, svinjsko i jagnjeće meso. Veleprodaja i maloprodaja sa dostavom na kućnu adresu.",
};

const OFFER = [
  {
    title: "Juneće meso",
    text: "Širok izbor komada junećeg mesa za veleprodaju i maloprodaju, pogodno za restorane i domaćinstva.",
  },
  {
    title: "Teleće meso",
    text: "Nežno teleće meso, izuzetnog kvaliteta, u ponudi za restorane i krajnje kupce.",
  },
  {
    title: "Svinjsko meso",
    text: "Kompletna ponuda svinjskog mesa, u skladu sa potrebama trgovinskih lanaca i ugostiteljskih objekata.",
  },
  {
    title: "Jagnjeće meso",
    text: "Sveže jagnjeće meso, dostupno tokom cele godine za veleprodaju i porudžbine za domaćinstva.",
  },
];

export default function PonudaPage() {
  return (
    <div>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Ponuda
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
            Sve vrste svežeg mesa, na jednom mestu
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            U ponudi imamo sve od junećeg, telećeg, svinjskog i jagnjećeg
            mesa. Za informacije o cenama, dostupnosti i porudžbinama,
            kontaktirajte nas — rado ćemo odgovoriti na vaš upit.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {OFFER.map(({ title, text }) => (
            <Card key={title}>
              <CardHeader>
                <Beef className="mb-2 size-7 text-primary" />
                <CardTitle className="text-xl">{title}</CardTitle>
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

      <section className="border-t border-border/70 bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Card className="border-primary/30">
            <CardHeader>
              <Store className="mb-2 size-7 text-primary" />
              <CardTitle>Veleprodaja</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Snabdevamo trgovinske lance i restorane redovnim isporukama i
                velikim količinama mesa, prilagođeno vašim potrebama.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-primary/30">
            <CardHeader>
              <Truck className="mb-2 size-7 text-primary" />
              <CardTitle>Maloprodaja i dostava</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Naručite sveže meso i dobijte ga direktno na kućnu adresu, uz
                brzu i pouzdanu dostavu.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 pb-20 text-center sm:px-6 lg:px-8">
          <p className="max-w-xl text-muted-foreground">
            Za cene, količine i dostupnost artikala, obratite nam se putem
            kontakt forme ili telefona.
          </p>
          <Button asChild size="lg">
            <Link href="/kontakt">Pošaljite upit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
