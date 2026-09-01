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

- `/` — Landing (početna)
- `/o-nama` — O nama
- `/ponuda` — Ponuda (vrste mesa, veleprodaja/maloprodaja)
- `/galerija` — Galerija (trenutno placeholder, čeka fotografije)
- `/kontakt` — Kontakt forma + podaci o firmi

## Pokretanje

```bash
npm install
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000).

## Šta treba dopuniti

- **Logo** — wordmark "BoduMex" je rekreiran u kodu (rukopisni font
  Kaushan Script + rust boja, po uzoru na pravi logo) u
  `src/components/logo.tsx`. Pravi logo fajl (ilustracija krave, kružna
  nalepnica) treba dodati kao stvarnu sliku — sačuvati ga u
  `public/logo.png` i po potrebi dodati `<Image src="/logo.png" ... />`
  pored ili umesto tekstualnog wordmark-a.
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
- **Galerija** — `src/app/galerija/page.tsx` sadrži prazne placeholder
  kartice koje treba zameniti stvarnim fotografijama.

## Build

```bash
npm run build
```
