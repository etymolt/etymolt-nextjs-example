import { Etymolt } from "@etymolt/sdk";
import { NextResponse } from "next/server";

const etymolt = new Etymolt({
  apiKey: process.env.ETYMOLT_API_KEY, // optional on free tier
  baseUrl: process.env.ETYMOLT_BASE_URL, // override to point at etymolt-mock
});

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  if (!name) {
    return NextResponse.json({ error: "missing_name" }, { status: 400 });
  }
  try {
    const verdict = await etymolt.verify(name);
    return NextResponse.json(verdict);
  } catch (err) {
    return NextResponse.json(
      { error: "etymolt_failed", message: (err as Error).message },
      { status: 502 }
    );
  }
}
