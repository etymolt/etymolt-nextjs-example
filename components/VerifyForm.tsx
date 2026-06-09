"use client";

import { useState, FormEvent } from "react";
import { VerdictCard } from "./VerdictCard";

export function VerifyForm() {
  const [name, setName] = useState("");
  const [verdict, setVerdict] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    setVerdict(null);
    setError(null);
    try {
      const r = await fetch("/api/verify", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: name.trim() }),
      });
      const json = await r.json();
      if (!r.ok) throw new Error(json.error ?? "request_failed");
      setVerdict(json);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Inkstack"
          className="flex-1 rounded-lg border border-neutral-300 px-4 py-3 text-base focus:border-neutral-900 focus:outline-none"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !name.trim()}
          className="rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white disabled:opacity-50"
        >
          {loading ? "Checking…" : "Verify"}
        </button>
      </form>

      {error && (
        <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
          {error}
        </div>
      )}

      {verdict && (
        <div className="mt-6">
          <VerdictCard verdict={verdict} />
        </div>
      )}
    </div>
  );
}
