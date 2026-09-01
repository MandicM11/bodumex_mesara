import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Wordmark rekreiran po uzoru na pravi BoduMex logo (rukopisni font +
 * rust/narandžasta boja). Kada firma pošalje pravi logo fajl (npr. sa
 * ilustracijom krave i kružnom nalepnicom), može se dodati kao:
 *   <Image src="/logo.png" alt="BoduMex" width={..} height={..} />
 * uz zadržavanje ili uklanjanje ovog tekstualnog wordmark-a.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex flex-col leading-none shrink-0", className)}
    >
      <span className="font-script text-3xl text-primary transition-opacity group-hover:opacity-80">
        BoduMex
      </span>
      <span className="mt-0.5 text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
        Osnovano 1992.
      </span>
    </Link>
  );
}
