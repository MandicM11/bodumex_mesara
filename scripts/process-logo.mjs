// Obrada izvornog loga: public/logobodux.jpg je kružna nalepnica
// upisana u kvadratno platno sa belim uglovima. Ovaj skript iseca
// krug i izvozi ga kao public/logo.png sa providnom pozadinom, spreman
// za prikaz na tamnoj pozadini sajta.
//
// Pokrenuti: npm run process-logo
// (ponovo pokrenuti ako firma pošalje novu/ažuriranu verziju loga —
// samo prepisati public/logobodux.jpg i pustiti skript ponovo)

import { copyFile } from "node:fs/promises";
import sharp from "sharp";

const SRC = "public/logobodux.jpg";
const OUT = "public/logo.png";
// Next.js konvencija — ove kopije generišu favicon/apple-touch-icon.
const ICON_COPIES = ["src/app/icon.png", "src/app/apple-icon.png"];
const SIZE = 1024;

const r = SIZE / 2;
const mask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg">` +
    `<circle cx="${r}" cy="${r}" r="${r - 1}" fill="#fff"/></svg>`
);
const maskPng = await sharp(mask, { density: 72 })
  .resize(SIZE, SIZE)
  .png()
  .toBuffer();

await sharp(SRC)
  .resize(SIZE, SIZE)
  .ensureAlpha()
  .composite([{ input: maskPng, blend: "dest-in" }])
  .png()
  .toFile(OUT);

for (const copy of ICON_COPIES) {
  await copyFile(OUT, copy);
}

console.log(`Logo obrađen: ${OUT} (+ ${ICON_COPIES.join(", ")})`);
