import { AuthButton } from '@/components/layouts/auth/auth-button'
import { MainNav } from '@/components/layouts/nav/main/main-nav'
import { MobileNav } from '@/components/layouts/nav/mobile/mobile-nav'
import { ThemeToggle } from '@/components/shared/theme-toggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/20 backdrop-blur-sm">
      <div className="mx-4 flex h-14 items-center sm:container">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <AuthButton />
          </nav>
        </div>
      </div>
    </header>
  )
}
