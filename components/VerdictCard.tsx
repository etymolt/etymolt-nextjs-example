const HEADLINE: Record<string, { verb: string; tone: string }> = {
  PROCEED: { verb: "Yes", tone: "text-emerald-700" },
  ITERATE: { verb: "Fix these", tone: "text-amber-700" },
  DECIDE: { verb: "Workable", tone: "text-amber-700" },
  ABANDON: { verb: "Don't use", tone: "text-rose-700" },
  INSUFFICIENT_SIGNAL: { verb: "Not enough signal", tone: "text-neutral-700" },
};

const AXIS_LABEL: Record<string, string> = {
  trademark: "Trademark",
  domain: "Domain",
  cultural: "Cultural signal",
  sound_symbolism: "Sound",
  pronunciation: "Pronunciation",
};

function lineFor(axis: string, status: string): string {
  if (status === "CLEAR") return `${AXIS_LABEL[axis]}: clear.`;
  if (status === "CAUTION") return `${AXIS_LABEL[axis]}: worth a closer look.`;
  if (status === "BLOCKED") return `${AXIS_LABEL[axis]}: blocked. Pick another name.`;
  if (status === "INSUFFICIENT_SIGNAL") return `${AXIS_LABEL[axis]}: not enough signal.`;
  return `${AXIS_LABEL[axis]}: ${status}.`;
}

export function VerdictCard({ verdict }: { verdict: any }) {
  const head = HEADLINE[verdict.verdict] ?? { verb: verdict.verdict, tone: "text-neutral-700" };

  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6">
      <div className="text-sm text-neutral-500">{verdict.name}</div>
      <div className={`mt-1 text-2xl font-semibold ${head.tone}`}>{head.verb}</div>

      {verdict.axes && (
        <div className="mt-4 space-y-1 text-sm text-neutral-700">
          {Object.entries<any>(verdict.axes).map(([axis, a]) => (
            <div key={axis}>{lineFor(axis, a.status)}</div>
          ))}
        </div>
      )}

      <div className="mt-5 text-xs leading-relaxed text-neutral-500">
        {verdict.disclaimer}
      </div>

      <div className="mt-3 flex items-center gap-3 text-[10px] text-neutral-400">
        {verdict.verdict_id && <span>id: {String(verdict.verdict_id).slice(0, 16)}…</span>}
        {verdict.signature_key_id && <span>key: {verdict.signature_key_id}</span>}
        {verdict.permalink && (
          <a href={verdict.permalink} className="underline">permalink</a>
        )}
      </div>
    </div>
  );
}
