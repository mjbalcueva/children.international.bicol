import { NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function GET() {
  const records = await db.childRecord.findMany()

  return NextResponse.json({ records })
}
