import type { Metadata } from "next";
import { ImageIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Galerija",
  description: "Galerija fotografija BODUMEX DOO.",
};

// Placeholder galerija — slike će biti dodate naknadno.
const PLACEHOLDER_COUNT = 8;

export default function GalerijaPage() {
  return (
    <div>
      <section className="border-b border-border/70">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.35em] text-primary">
            Galerija
          </span>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl text-foreground sm:text-5xl">
            Fotografije uskoro
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Galerija je trenutno u pripremi. Uskoro ćemo ovde objaviti
            fotografije naših proizvoda, prostorija i tima.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-md border border-dashed border-border bg-card text-muted-foreground"
            >
              <ImageIcon className="size-8 text-primary/60" />
              <span className="text-xs uppercase tracking-[0.2em]">
                Uskoro
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
