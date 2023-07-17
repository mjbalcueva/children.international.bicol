'use client'

import { forwardRef } from 'react'
import Link from 'next/link'

import { navLinksConfig } from '@/config/nav-links'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function MenuNavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navLinksConfig.map((link, index) =>
          link.subLinks ? (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger className="dark:text-muted-foreground dark:hover:text-foreground">
                {link.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {link.subLinks.map((subLink) => (
                    <ListItem key={subLink.title} title={subLink.title} href={subLink.href}>
                      {subLink.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={index}>
              {link.href && (
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center text-sm font-medium  dark:text-muted-foreground dark:hover:text-foreground',
                    navigationMenuTriggerStyle()
                  )}
                >
                  {link.title}
                </Link>
              )}
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
