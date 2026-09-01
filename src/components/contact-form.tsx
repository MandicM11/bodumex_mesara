"use client";

import * as React from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error ?? "Došlo je do greške.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Došlo je do greške."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-md border border-primary/40 bg-card px-6 py-14 text-center">
        <CheckCircle2 className="size-10 text-primary" />
        <h3 className="font-serif text-xl text-foreground">
          Poruka je uspešno poslata
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Hvala na upitu. Naš tim će vas kontaktirati u najkraćem mogućem
          roku.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Pošalji novu poruku
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Ime i prezime</Label>
          <Input id="name" name="name" required placeholder="Vaše ime" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" placeholder="Broj telefona" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="vas.email@primer.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Poruka</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Vaš upit — vrsta mesa, količina, dostava..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" && <Loader2 className="size-4 animate-spin" />}
        Pošaljite poruku
      </Button>
    </form>
  );
}
