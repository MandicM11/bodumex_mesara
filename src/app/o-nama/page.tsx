import type { Metadata } from "next";
import { Building2, Factory, ScrollText, Truck } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "BODUMEX DOO — preduzeće za proizvodnju, unutrašnju i spoljnu trgovinu i usluge, registrovano 1992. godine.",
};

const COMPANY_INFO = [
  { label: "Naziv", value: "BODUMEX DOO" },
  {
    label: "Delatnost",
    value:
      "Proizvodnja, unutrašnja i spoljna trgovina i usluge — nespecijalizovana trgovina na veliko",
  },
  { label: "Registrovano", value: "1992. godine" },
  { label: "Sedište firme", value: "Subotička 15/10, Zvezdara, Beograd" },
  { label: "Sedište klanice", value: "Pere Ninkovića bb, Stara Pazova" },
  { label: "PIB", value: "100034683" },
  { label: "Matični broj", value: "07805713" },
];

const PARTNERS = ["DIS", "Univerexport", "Fortuna"];
const RESTAURANTS = [
  "Madera",
  "Frans",
  "Bottega",
  "Tri šešira",
  "Proleće",
  "Lafayette",
];

export default function ONamaPage() {
  return (
    <div>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            O nama
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
            Preko tri decenije poverenja u mesnoj industriji
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            BODUMEX DOO je preduzeće za proizvodnju, unutrašnju i spoljnu
            trgovinu i usluge, registrovano 1992. godine. Bavimo se
            nespecijalizovanom trgovinom na veliko, sa fokusom na veleprodaju
            i, u novije vreme, maloprodaju svežeg mesa.
          </p>
        </div>
      </section>

      {/* Detalji o firmi */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              Podaci o firmi
            </span>
            <h2 className="mt-3 font-serif text-3xl text-foreground">
              Osnovni podaci
            </h2>
            <dl className="mt-8 flex flex-col gap-5">
              {COMPANY_INFO.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-border/60 pb-4"
                >
                  <dt className="text-xs uppercase tracking-[0.2em] text-primary">
                    {label}
                  </dt>
                  <dd className="text-base text-foreground/90">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <Factory className="mb-2 size-7 text-primary" />
                <CardTitle>Proizvodnja i veleprodaja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Snabdevamo najpoznatije trgovinske lance i ugledne
                  restorane u Beogradu svežim mesom vrhunskog kvaliteta,
                  redovno i u velikim količinama.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="mb-2 size-7 text-primary" />
                <CardTitle>Maloprodaja i dostava</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Pored veleprodaje, počeli smo i sa maloprodajom — radimo
                  dostavu svežeg mesa direktno na kućnu adresu.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className="mb-2 size-7 text-primary" />
                <CardTitle>Sedišta</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Poslovno sedište firme nalazi se na Zvezdari u Beogradu, dok
                  se klanica nalazi u Staroj Pazovi.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partneri i restorani */}
      <section className="border-t border-border/70 bg-card">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ScrollText className="size-6 text-primary" />
            <span className="text-xs uppercase tracking-[0.35em] text-primary">
              Naši klijenti
            </span>
          </div>
          <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
            Poverenje najpoznatijih imena
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Godinama snabdevamo najveće trgovinske lance i najpoznatije
            restorane u Beogradu.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-lg text-primary">
                Trgovinski lanci
              </h3>
              <ul className="mt-5 flex flex-col gap-3 text-lg text-foreground/90">
                {PARTNERS.map((p) => (
                  <li key={p} className="border-b border-border/60 pb-3">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg text-primary">Restorani</h3>
              <ul className="mt-5 flex flex-col gap-3 text-lg text-foreground/90">
                {RESTAURANTS.map((r) => (
                  <li key={r} className="border-b border-border/60 pb-3">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
