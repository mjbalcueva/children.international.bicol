import { NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function GET() {
  const children = await db.child.findMany()

  return NextResponse.json({ children })
}
