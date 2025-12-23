"use client";

import { useState } from "react";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, message }),
    });

    if (res.ok) {
      setStatus("sent");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto px-4">
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
      />
      <input
        type="text"
        placeholder="Subject (optional)"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full bg-zinc-900 border border-zinc-700 px-4 py-3 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors h-32 resize-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white font-medium hover:bg-zinc-700 hover:border-zinc-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && <p className="text-emerald-400 text-center text-sm">Message sent successfully!</p>}
      {status === "error" && <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>}
    </form>
  );
}
