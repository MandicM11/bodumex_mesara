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
      <div className="flex items-center gap-3 border-b border-border/70 px-6 py-6">
        <Icon className="size-8 text-primary" />
        <h3 className="font-serif text-2xl text-foreground">{title}</h3>
      </div>
      <table className="w-full text-base">
        <thead>
          <tr className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
            <th className="px-6 py-3 text-left font-normal">Artikal</th>
            <th className="px-6 py-3 text-right font-normal">Cena/kg</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {items.map(({ artikal, cena }, i) => (
            <tr
              key={artikal}
              className={i % 2 === 1 ? "bg-black/20" : undefined}
            >
              <td className="px-6 py-4 text-foreground/90">{artikal}</td>
              <td className="px-6 py-4 text-right font-medium text-primary whitespace-nowrap">
                {cena} RSD
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
