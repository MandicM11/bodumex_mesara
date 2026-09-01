import type { Metadata } from "next";
import Link from "next/link";
import { Beef, Truck, Store, Flame, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PriceTable } from "@/components/price-table";

export const metadata: Metadata = {
  title: "Ponuda i cenovnik",
  description:
    "Cenovnik BODUMEX DOO — teleće, svinjsko, juneće i roštilj meso. Veleprodaja i maloprodaja sa dostavom na kućnu adresu.",
};

// Cenovnik — vrsta mesa, delovi i cena po kilogramu (RSD).
const TELECE = [
  { artikal: "Teleći but b/k (šnicle)", cena: "2.400,00" },
  { artikal: "Teleća plećka b/k (može kockice)", cena: "2.200,00" },
  { artikal: "Teleći vrat b/k", cena: "2.300,00" },
  { artikal: "Teleći vrat s/k", cena: "1.900,00" },
  { artikal: "Teleća rebra s/k", cena: "1.950,00" },
  { artikal: "Teleći kotlet s/k (sa fileom)", cena: "2.000,00" },
  { artikal: "Teleći file", cena: "4.000,00" },
  { artikal: "Teleća butkica s/k", cena: "1.500,00" },
  { artikal: "Teleći ramstek", cena: "2.500,00" },
  { artikal: "Teleća džigerica", cena: "1.200,00" },
];

const SVINJSKO = [
  { artikal: "Svinjski but", cena: "730,00" },
  { artikal: "Svinjska plećka", cena: "730,00" },
  { artikal: "Svinjski laks kare", cena: "850,00" },
  { artikal: "Svinjski vrat b/k", cena: "1.000,00" },
  { artikal: "Svinjski vrat s/k", cena: "730,00" },
  { artikal: "Svinjska krmenadla s/k", cena: "550,00" },
  { artikal: "Svinjski file", cena: "1.000,00" },
  { artikal: "Svinjski šol", cena: "800,00" },
];

const JUNECE = [
  { artikal: "Juneći but b/k", cena: "1.450,00" },
  { artikal: "Juneći biftek", cena: "4.000,00" },
  { artikal: "Juneći ramstek", cena: "1.700,00" },
  { artikal: "Juneća rozbratna s/k", cena: "1.000,00" },
  { artikal: "Juneća rebra s/k", cena: "930,00" },
  { artikal: "Juneći ribić", cena: "1.450,00" },
  { artikal: "Juneća plećka b/k", cena: "1.370,00" },
];

const ROSTILJ = [
  { artikal: "Pljeskavica", cena: "1.100,00" },
  { artikal: "Ćevapi", cena: "1.100,00" },
  { artikal: "Burgeri", cena: "1.300,00" },
];

export default function PonudaPage() {
  return (
    <div>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Ponuda i cenovnik
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
            Sve vrste svežeg mesa, na jednom mestu
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            U ponudi imamo sve od junećeg, telećeg, svinjskog i jagnjećeg
            mesa, kao i gotove proizvode za roštilj. Ispod pogledajte važeći
            cenovnik po kilogramu.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <PriceTable icon={Beef} title="Teleće meso" items={TELECE} />
          <PriceTable icon={Beef} title="Juneće meso" items={JUNECE} />
          <PriceTable icon={Beef} title="Svinjsko meso" items={SVINJSKO} />
          <PriceTable
            icon={Flame}
            title="Roštilj meso (čista junetina)"
            items={ROSTILJ}
          />
        </div>

        <div className="mt-8 flex flex-col gap-3 rounded-md border border-border/70 bg-card px-6 py-5 text-sm text-muted-foreground sm:flex-row sm:items-start sm:gap-4">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div className="flex flex-col gap-1">
            <p>
              <span className="text-foreground/90">b/k</span> — bez kostiju ·{" "}
              <span className="text-foreground/90">s/k</span> — sa kostima
            </p>
            <p>
              Jagnjeće meso dostupno je sezonski, po ceni na upit. Cene su
              izražene u RSD po kilogramu i podložne su promeni.
            </p>
          </div>
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
            Za porudžbine, količine i dostupnost artikala, obratite nam se
            putem kontakt forme ili telefona.
          </p>
          <Button asChild size="lg">
            <Link href="/kontakt">Pošaljite upit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
