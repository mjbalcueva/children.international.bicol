import Link from 'next/link'

import { BackButton } from '@/components/layouts/auth/back-button'
import { RegisterForm } from '@/components/layouts/auth/register-form'
import { Icons } from '@/components/shared/icons'

export default function RegisterPage() {
  return (
    <>
      <div className="container flex h-screen w-screen flex-col items-center justify-center px-4">
        <BackButton />
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">Welcome to Child-Tr</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials below to create an account</p>
          </div>
          <RegisterForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-sm text-primary underline-offset-4 transition-colors hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
