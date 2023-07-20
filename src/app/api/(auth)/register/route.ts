import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { ZodError } from 'zod'

import { db } from '@/lib/db'
import { getErrorResponse } from '@/lib/helper'
import { RegisterUserSchema, RegisterUserSchemaInput } from '@/lib/validators/user.schema'

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as RegisterUserSchemaInput
    const data = RegisterUserSchema.parse(body)

    const hashedPassword = await hash(data.password, 12)
    const user = await db.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      {
        status: 'success',
        data: {
          user: { ...user, password: undefined },
        },
      },
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error: any) {
    console.log(error)
    if (error instanceof ZodError) return getErrorResponse(400, 'Failed validations', error)
    if (error.code === 'P2002') return getErrorResponse(409, 'User with that email already exists')

    return getErrorResponse(500, error.message)
  }
}
