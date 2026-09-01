import type { LucideIcon } from "lucide-react";

export interface PriceItem {
  artikal: string;
  cena: string;
}

export function PriceTable({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: PriceItem[];
}) {
  return (
    <div className="rounded-md border border-border/70 bg-card">
      <div className="flex items-center gap-3 border-b border-border/70 px-6 py-5">
        <Icon className="size-6 text-primary" />
        <h3 className="font-serif text-xl text-foreground">{title}</h3>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
            <th className="px-6 py-3 text-left font-normal">Artikal</th>
            <th className="px-6 py-3 text-right font-normal">Cena/kg</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ artikal, cena }, i) => (
            <tr
              key={artikal}
              className={i % 2 === 1 ? "bg-background/40" : undefined}
            >
              <td className="px-6 py-3 text-foreground/90">{artikal}</td>
              <td className="px-6 py-3 text-right font-medium text-primary whitespace-nowrap">
                {cena} RSD
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
