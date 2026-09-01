import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktirajte BODUMEX DOO — Subotička 15/10, Zvezdara, Beograd. Pošaljite upit putem kontakt forme.",
};

export default function KontaktPage() {
  return (
    <div>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Kontakt
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
            Stupite u kontakt sa nama
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Za sve informacije o veleprodaji, maloprodaji, dostavi i saradnji,
            popunite formu ispod ili nas kontaktirajte direktno.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Card>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <Card>
              <CardContent className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                      Sedište firme
                    </p>
                    <p className="mt-1 text-foreground/90">
                      {CONTACT.addressStreet}
                      <br />
                      {CONTACT.addressCity}, Srbija
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                      Sedište klanice
                    </p>
                    <p className="mt-1 text-foreground/90">
                      {CONTACT.slaughterhouse}
                      <br />
                      {CONTACT.slaughterhouseCity}, Srbija
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                      Telefon
                    </p>
                    <a
                      href={CONTACT.phoneHref}
                      className="mt-1 block text-foreground/90 hover:text-primary"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-primary">
                      Radno vreme
                    </p>
                    <p className="mt-1 text-foreground/90">
                      Ponedeljak – subota: 07:00 – 16:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="overflow-hidden rounded-md border border-border/70">
              <iframe
                title="Lokacija — Subotička 15/10, Zvezdara, Beograd"
                src="https://www.google.com/maps?q=Suboti%C4%8Dka%2015%2C%20Beograd&output=embed"
                className="h-64 w-full grayscale invert-[0.92] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
