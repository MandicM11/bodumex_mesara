// Zvanični kontakt podaci firme (sa cenovnika/memoranduma BoduMex).
export const CONTACT = {
  phoneDisplay: "064 2995 263",
  phoneHref: "tel:+381642995263",
  addressStreet: "Subotička 15/10, Zvezdara",
  addressCity: "11000 Beograd",
  slaughterhouse: "Pere Ninkovića bb",
  slaughterhouseCity: "Stara Pazova",
  pib: "100034683",
  maticniBroj: "07805713",
  sifraDelatnosti: "4690",
  tekuciRacun: "265-1740310000496-17",
  // Otvara Google Maps (aplikaciju ili sajt) sa pretragom adrese —
  // za razliku od /maps?...&output=embed (samo za <iframe> prikaz).
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Suboti%C4%8Dka+15%2C+Beograd",
} as const;
