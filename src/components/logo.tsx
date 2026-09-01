import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Pravi BoduMex logo (kružna nalepnica sa ilustracijom krave i farme),
 * isečen na providnu pozadinu iz izvornog public/logobodux.jpg —
 * obrada opisana u scripts/process-logo.mjs (pokrenuti ponovo ako
 * stigne novi izvorni fajl).
 */
export function Logo({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3 shrink-0", className)}
    >
      <Image
        src="/logo.png"
        alt="BoduMex — sveže domaće meso"
        width={1024}
        height={1024}
        priority
        className={cn(
          "h-14 w-14 shrink-0 object-contain transition-transform group-hover:scale-105",
          imageClassName
        )}
      />
    </Link>
  );
}
