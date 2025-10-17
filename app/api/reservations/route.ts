import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const data = await request.json()
  // In a real app, you would validate and persist this.
  // For now, just echo back success.
  return NextResponse.json({ ok: true, received: data }, { status: 200 })
}
