'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { navLinksConfig } from '@/config/nav-links'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Icons } from '@/components/shared/icons'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-base focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Icons.menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pl-1 pr-0">
        <div className="px-7">
          <Link aria-label="Home" href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Icons.logo className="mr-2 h-8 w-8" aria-hidden="true" />
            <span className="font-bold">{siteConfig.name}</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="pl-1 pr-7">
            <Accordion type="single" collapsible className="w-full">
              {navLinksConfig?.map((link, index) =>
                link.subLinks ? (
                  <AccordionItem value={link.title} key={index}>
                    <AccordionTrigger className="text-sm capitalize">{link.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={index}
                            href={String(subLink.href)}
                            className={cn(
                              'text-foreground/70 transition-colors hover:text-foreground',
                              pathname === String(subLink.href) && 'text-foreground'
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {subLink.title}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <Link key={index} href={link.href!} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="link"
                      className="w-full justify-start rounded-none border-b px-0 py-[26px] text-sm capitalize underline-offset-1"
                    >
                      {link.title}
                    </Button>
                  </Link>
                )
              )}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
