"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/contact";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const NAV_LINKS = [
  { href: "/", label: "Početna" },
  { href: "/o-nama", label: "O nama" },
  { href: "/ponuda", label: "Ponuda" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary",
                  active && "text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={CONTACT.phoneHref}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4" />
            {CONTACT.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <Link href="/kontakt">Pošaljite upit</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Otvori meni"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>Meni</SheetTitle>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "rounded-sm px-3 py-3 text-base uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:bg-accent hover:text-primary",
                        active && "text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
            <div className="mt-auto flex flex-col gap-4 border-t border-border/70 pt-6">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Phone className="size-4" />
                {CONTACT.phoneDisplay}
              </a>
              <SheetClose asChild>
                <Button asChild>
                  <Link href="/kontakt">Pošaljite upit</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
