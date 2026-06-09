# etymolt-nextjs-example

> Drop-in Next.js App Router example for the [Etymolt](https://etymolt.com) API. Type a name, get a signed verdict back.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/etymolt/etymolt-nextjs-example)
[![License: Apache-2.0](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](./LICENSE)

## Run it

```bash
git clone https://github.com/etymolt/etymolt-nextjs-example
cd etymolt-nextjs-example
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), type a name, hit Verify.

## Use offline (with etymolt-mock)

In one terminal:
```bash
npx etymolt-mock
# → listening on http://localhost:4242
```

In another:
```bash
ETYMOLT_BASE_URL=http://localhost:4242 npm run dev
```

The app now hits the local mock — deterministic verdicts, no network, no API key.

## What's in this example

- `app/page.tsx` — the form.
- `components/VerifyForm.tsx` — client component that calls `/api/verify`.
- `components/VerdictCard.tsx` — answer-first renderer with the EVP/1 disclaimer.
- `app/api/verify/route.ts` — server-side route that uses `@etymolt/sdk` to keep the (optional) API key off the client.

## Patterns demonstrated

1. **Server-side SDK call.** API key never reaches the browser. The route handler runs the SDK.
2. **Answer-first UI.** Headline is `Yes / Fix these / Workable / Don't use / Not enough signal` — never a bare score.
3. **Per-axis breakdown.** One line per axis (trademark, domain, cultural, sound, pronunciation).
4. **Disclaimer rendered verbatim** per [EVP/1 §5](https://github.com/etymolt/evp-spec).

## License

Apache-2.0.
