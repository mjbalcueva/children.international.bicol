import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from '@/components/layouts/page-header'

export default function Home() {
  return (
    <div className="relative mx-4 sm:container">
      <PageHeader>
        <PageHeaderHeading>Home</PageHeaderHeading>
        <PageHeaderDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus facilis velit ducimus harum odit
          perferendis adipisci est amet. Cumque ipsam ratione corporis molestiae autem alias! Beatae sunt consectetur
          deleniti aliquid!
        </PageHeaderDescription>
        <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
          <Link href="/" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link href="/" className={cn(buttonVariants({ variant: 'outline' }))}>
            Love
          </Link>
        </div>
      </PageHeader>
    </div>
  )
}
