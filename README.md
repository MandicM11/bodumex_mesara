# BODUMEX DOO — sajt

Sajt za **BODUMEX DOO**, preduzeće za proizvodnju, unutrašnju i spoljnu
trgovinu i usluge (veleprodaja i maloprodaja mesa), izrađen u Next.js-u.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) komponente (Button, Card, Input,
  Textarea, Label, Sheet)
- TypeScript

## Stranice

- `/` — Landing (početna) — sadrži i placeholder galeriju (čeka
  fotografije)
- `/o-nama` — O nama
- `/ponuda` — Ponuda i cenovnik
- `/kontakt` — Kontakt forma + podaci o firmi

## Pokretanje

```bash
npm install
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000).

## Šta treba dopuniti

- **Logo** — pravi logo je ubačen (`public/logo.png`, obrađen iz
  `public/logobodux.jpg` skriptom `scripts/process-logo.mjs`). Ako
  firma pošalje noviju verziju, pogledati `public/README-logo.txt`.
- **Kontakt podaci** — telefon, adrese, PIB, MB, šifra delatnosti i
  tekući račun su centralizovani u `src/lib/contact.ts` (preuzeti sa
  zvaničnog cenovnika/memoranduma firme). Email adresa firme još nije
  dostupna — dodati je u `contact.ts` kada bude poznata.
- **Slanje kontakt forme** — forma šalje POST na `/api/contact`
  (`src/app/api/contact/route.ts`), koji trenutno samo loguje upit na
  serveru. Potrebno je povezati slanje email-a (npr. Resend ili
  Nodemailer + SMTP) kada budu dostupni pravi podaci/API ključevi.
- **Cenovnik** — cene u `src/app/ponuda/page.tsx` su preuzete sa
  zvaničnog cenovnika firme; ažurirati ih tu kada se promene.
- **Galerija** — placeholder sekcija na početnoj strani
  (`src/app/page.tsx`) sadrži prazne kartice koje treba zameniti
  stvarnim fotografijama.

## Build

```bash
npm run build
```
