import { Balancer } from 'react-wrap-balancer'

import { cn } from '@/lib/utils'

export function PageHeader({ className, children, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn('flex max-w-[980px] flex-col items-start gap-2 pt-8 md:pt-12', className)} {...props}>
      {children}
    </section>
  )
}

export function PageHeaderHeading({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn('text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]', className)}
      {...props}
    />
  )
}

export function PageHeaderDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <Balancer className={cn('max-w-[750px] text-base text-muted-foreground sm:text-lg', className)} {...props} />
}
