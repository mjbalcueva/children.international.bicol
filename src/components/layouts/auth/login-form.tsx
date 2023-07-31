'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { LoginUserSchema, LoginUserSchemaInput } from '@/lib/validators/user.schema'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { PasswordInput } from '@/components/layouts/auth/password-input'
import { Icons } from '@/components/shared/icons'

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<LoginUserSchemaInput>({
    resolver: zodResolver(LoginUserSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginUserSchemaInput) {
    setIsLoading(true)

    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        toast({
          title: 'Error',
          description: callback.error,
          variant: 'destructive',
        })
        setIsLoading(false)
      }
      if (callback?.ok && !callback?.error) {
        toast({
          title: 'Signed in successfully',
          description: 'Redirecting, please wait...',
        })
        window.location.href = '/'
        setIsLoading(false)
      }
    })
  }
  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
          Log in
          <span className="sr-only">Log in</span>
        </Button>
      </form>
    </Form>
  )
}
