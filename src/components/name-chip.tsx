import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/fade-in";

/**
 * Kartica sa imenom partnera/klijenta — hover lebdenje + glow iza
 * kartice, uz fade-in-on-scroll. Koristi se na početnoj i O nama
 * stranici (lista partnera/restorana).
 */
export function NameChip({
  name,
  delayMs = 0,
  className,
}: {
  name: string;
  delayMs?: number;
  className?: string;
}) {
  return (
    <FadeIn delayMs={delayMs}>
      <div
        className={cn(
          "group relative flex h-full items-center justify-center rounded-lg border border-border/70 bg-card px-4 py-6 transition-transform duration-300 hover:-translate-y-1.5",
          className
        )}
      >
        <div className="absolute inset-0 -z-10 rounded-lg bg-primary/25 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
        <span className="font-serif text-lg tracking-wide text-muted-foreground transition-colors duration-300 group-hover:text-primary">
          {name}
        </span>
      </div>
    </FadeIn>
  );
}
