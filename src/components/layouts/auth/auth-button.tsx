import Link from 'next/link'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/lib/auth'
import { buttonVariants } from '@/components/ui/button'
import { UserButton } from '@/components/layouts/auth/user-button'

export async function AuthButton() {
  const session = await getServerSession(authOptions)

  const name = session?.user.name ?? ''
  const email = session?.user.email ?? ''

  return (
    <>
      {session?.user ? (
        <UserButton name={name} email={email} />
      ) : (
        <Link href="/login" className="pl-2">
          <div className={buttonVariants({ size: 'sm' })}>
            Log in
            <span className="sr-only">Log in</span>
          </div>
        </Link>
      )}
    </>
  )
}
