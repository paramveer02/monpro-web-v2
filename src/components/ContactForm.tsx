"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbdagpzd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-accent-border bg-accent-dim p-8 text-center">
        <p className="text-accent font-semibold mb-2">Message sent.</p>
        <p className="text-text-secondary text-sm">
          I&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-text-secondary text-sm mb-2"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-text-secondary text-sm mb-2"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          placeholder="you@brand.com"
        />
      </div>

      {/* Phone (Optional) */}
      <div>
        <label
          htmlFor="phone"
          className="block text-text-secondary text-sm mb-2"
        >
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          placeholder="+91 98xxxxxxx"
        />
      </div>

      {/* Brand */}
      <div>
        <label
          htmlFor="brand"
          className="block text-text-secondary text-sm mb-2"
        >
          Brand / Store URL
        </label>
        <input
          id="brand"
          name="brand"
          type="text"
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          placeholder="yourbrand.in"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-text-secondary text-sm mb-2"
        >
          What&apos;s your biggest backend problem?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-border bg-bg-secondary px-4 py-3 text-text-primary text-sm placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
          placeholder="High RTO, manual verification, fragmented operations..."
        />
      </div>

      <Button type="submit" variant="primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Try again or email directly.
        </p>
      )}
    </form>
  );
}
