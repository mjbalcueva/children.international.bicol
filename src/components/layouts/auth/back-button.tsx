import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/shared/icons'

export function BackButton() {
  return (
    <Link
      href="/"
      className={cn(buttonVariants({ variant: 'ghost' }), 'absolute left-2 top-4 sm:left-4 md:left-8 md:top-8')}
    >
      <Icons.chevronLeft className="mr-2 h-4 w-4" />
      Back
    </Link>
  )
}
