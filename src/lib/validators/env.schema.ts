import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string(),
  NEXTAUTH_URL: z.string(),
  NEXTAUTH_SECRET: z.string(),
  DATABASE_URL: z.string(),
})

envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
