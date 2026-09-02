logobodux.jpg — originalni logo koji je poslala firma (kružna
nalepnica sa ilustracijom, na belom kvadratnom platnu).

logo.png — obrađena verzija (krug isečen na providnu pozadinu),
generisana skriptom scripts/process-logo.mjs. Ovaj fajl se koristi
na sajtu (header, footer, početna strana). Skripta istu sliku kopira
i u src/app/icon.png i src/app/apple-icon.png (Next.js konvencija za
favicon/apple-touch-icon).

Ako firma pošalje novu/ažuriranu verziju loga:
1. Prepisati public/logobodux.jpg novim fajlom
2. Pokrenuti: npm run process-logo
3. Proveriti da public/logo.png (i favicon u tabu browsera) izgleda
   kako treba
