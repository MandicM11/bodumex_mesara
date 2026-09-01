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

- **Logo** — trenutno je postavljen tekstualni monogram
  (`src/components/logo.tsx`). Kada stigne pravi logo fajl, sačuvati ga u
  `public/logo.png` i zameniti monogram sa `<Image src="/logo.png" ... />`.
- **Telefon i email** — trenutno su placeholder vrednosti
  (`+381 (0)11 000 0000`, `info@bodumex.rs`) u `site-header.tsx`,
  `site-footer.tsx` i `kontakt/page.tsx`. Zameniti stvarnim podacima.
- **Slanje kontakt forme** — forma šalje POST na `/api/contact`
  (`src/app/api/contact/route.ts`), koji trenutno samo loguje upit na
  serveru. Potrebno je povezati slanje email-a (npr. Resend ili
  Nodemailer + SMTP) kada budu dostupni pravi podaci/API ključevi.
- **Galerija** — `src/app/galerija/page.tsx` sadrži prazne placeholder
  kartice koje treba zameniti stvarnim fotografijama.

## Build

```bash
npm run build
```
