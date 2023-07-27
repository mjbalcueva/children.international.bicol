import { z } from 'zod'

export const RegisterUserSchema = z
  .object({
    firstName: z
      .string({
        required_error: 'First name is required',
      })
      .min(1, 'First name must be at least 1 character'),
    lastName: z
      .string({
        required_error: 'Last name is required',
      })
      .min(1, 'Last name must be at least 1 character'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .min(1, 'Email must be at least 1 character')
      .email('Email is invalid'),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    confirmPassword: z
      .string({
        required_error: 'Please retype your password',
      })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

export const LoginUserSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Email must be at least 1 character')
    .email('Email is invalid'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export type RegisterUserSchemaInput = z.infer<typeof RegisterUserSchema>
export type LoginUserSchemaInput = z.infer<typeof LoginUserSchema>
