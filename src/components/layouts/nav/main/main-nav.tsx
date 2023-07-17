import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { MenuNavLinks } from '@/components/layouts/nav/main/menu-nav-links'
import { Icons } from '@/components/shared/icons'

export function MainNav() {
  return (
    <div className="hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-8 w-8" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <MenuNavLinks />
    </div>
  )
}
