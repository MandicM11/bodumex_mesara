import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Privremeni (placeholder) logo — monogram u zlatnom okviru.
 * Kada stigne pravi logo (fajl), zameniti sadržaj ovog linka sa:
 *   <Image src="/logo.png" alt="BODUMEX" width={..} height={..} />
 * i po potrebi ukloniti monogram ispod.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-3 shrink-0",
        className
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-sm border border-primary/70 text-primary font-serif text-lg tracking-widest transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        B
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg tracking-[0.2em] text-foreground">
          BODUMEX
        </span>
        <span className="mt-1 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Sveže meso od 1992.
        </span>
      </span>
    </Link>
  );
}
