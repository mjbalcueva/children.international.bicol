import { z } from 'zod'

export const RegisterUserSchema = z
  .object({
    firstName: z
      .string({
        required_error: 'Name is required',
      })
      .min(1, 'Full name is required'),
    lastName: z
      .string({
        required_error: 'Name is required',
      })
      .min(1, 'Full name is required'),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .min(1, 'Email is required')
      .email('Email is invalid'),
    password: z
      .string({
        required_error: 'Password is required',
      })
      .min(1, 'Password is required')
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),
    confirmPassword: z
      .string({
        required_error: 'Retype your password',
      })
      .min(1, 'Password confirmation is required')
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
    .min(1, 'Email is required')
    .email('Email is invalid'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
})

export type RegisterUserSchemaInput = z.infer<typeof RegisterUserSchema>
export type LoginUserSchemaInput = z.infer<typeof LoginUserSchema>
