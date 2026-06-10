import { VerifyForm } from "@/components/VerifyForm";

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="text-xs uppercase tracking-wider text-neutral-500">Etymolt · Next.js example</div>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">Naming, attested.</h1>
      <p className="mt-3 text-neutral-600">
        The fact-check layer for LLM-generated names. Type a candidate. Etymolt returns a signed verdict across five axes: trademark, domain, cultural signal, sound, pronunciation.
      </p>
      <div className="mt-8">
        <VerifyForm />
      </div>
      <p className="mt-12 text-xs text-neutral-500">
        Source: <a href="https://github.com/etymolt/etymolt-nextjs-example" className="underline">github.com/etymolt/etymolt-nextjs-example</a> · Spec: <a href="https://github.com/etymolt/evp-spec" className="underline">EVP/1</a>
      </p>
    </main>
  );
}
