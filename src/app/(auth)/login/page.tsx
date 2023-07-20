import Link from 'next/link'

import { BackButton } from '@/components/layouts/auth/back-button'
import { LoginForm } from '@/components/layouts/auth/login-form'
import { Icons } from '@/components/shared/icons'

export default function LoginPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center px-4">
      <BackButton />
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Enter your credentials to sign in to your account</p>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-sm text-primary underline-offset-4 transition-colors hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
