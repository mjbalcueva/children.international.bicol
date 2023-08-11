import { NextResponse } from 'next/server'

import { db } from '@/lib/db'

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const record = await db.childRecord.findUnique({
    where: { id: params.id },
    include: {
      child: {
        include: {
          childInformation: true,
          family: {
            include: {
              guardians: true,
              children: {
                where: {
                  childRecordId: { not: params.id },
                },
              },
            },
          },
        },
      },
    },
  })

  return NextResponse.json({ record })
}
