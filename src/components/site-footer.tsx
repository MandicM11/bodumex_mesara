import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            BODUMEX DOO — preduzeće za proizvodnju, unutrašnju i spoljnu
            trgovinu i usluge. Na tržištu od 1992. godine. Veleprodaja i
            maloprodaja svežeg mesa, sa dostavom na kućnu adresu.
          </p>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-primary">
            Navigacija
          </h3>
          <ul className="mt-5 flex flex-col gap-3 text-sm text-muted-foreground">
            <li>
              <Link href="/o-nama" className="hover:text-primary">
                O nama
              </Link>
            </li>
            <li>
              <Link href="/ponuda" className="hover:text-primary">
                Ponuda
              </Link>
            </li>
            <li>
              <Link href="/galerija" className="hover:text-primary">
                Galerija
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-primary">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.2em] text-primary">
            Kontakt
          </h3>
          <ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                Subotička 15/10, Zvezdara
                <br />
                11000 Beograd
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                Sedište klanice: Pere Ninkovića bb
                <br />
                Stara Pazova
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              {/* Placeholder telefon */}
              <a href="tel:+381000000000" className="hover:text-primary">
                +381 (0)11 000 0000
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              {/* Placeholder email */}
              <a href="mailto:info@bodumex.rs" className="hover:text-primary">
                info@bodumex.rs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="gold-rule" />

      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} BODUMEX DOO. Sva prava zadržana.
        </p>
        <p>PIB: 100034683 · MB: 07805713</p>
      </div>
    </footer>
  );
}
