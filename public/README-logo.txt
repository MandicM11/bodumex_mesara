logobodux.jpg — originalni logo koji je poslala firma (kružna
nalepnica sa ilustracijom, na belom kvadratnom platnu).

logo.png — obrađena verzija (krug isečen na providnu pozadinu),
generisana skriptom scripts/process-logo.mjs. Ovaj fajl se koristi
na sajtu (header, footer, početna strana, favicon).

Ako firma pošalje novu/ažuriranu verziju loga:
1. Prepisati public/logobodux.jpg novim fajlom
2. Pokrenuti: npm run process-logo
3. Proveriti da public/logo.png izgleda kako treba
