'use client'

import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Icons } from '@/components/shared/icons'

export function UserButton() {
  const { data: session } = useSession()
  const initials = session?.user?.name
    ? session?.user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
    : ''

  return (
    <>
      {session?.user ? (
        <div className="pl-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  {/* <AvatarImage src={user.imageUrl} alt={user.name ?? ""} /> */}
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{session?.user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{session?.user.email}</p>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/account">
                    <Icons.user className="mr-2 h-4 w-4" aria-hidden="true" />
                    Account
                    <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings">
                    <Icons.settings className="mr-2 h-4 w-4" aria-hidden="true" />
                    Settings
                    <DropdownMenuShortcut>⇧S</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem asChild>
                <button onClick={() => signOut()} className="w-full">
                  <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
                  Log out
                  <DropdownMenuShortcut>⇧L</DropdownMenuShortcut>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
