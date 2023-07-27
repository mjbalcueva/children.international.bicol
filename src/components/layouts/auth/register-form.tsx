'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

import { RegisterUserSchema, RegisterUserSchemaInput } from '@/lib/validators/user.schema'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { PasswordInput } from '@/components/layouts/auth/password-input'
import { Icons } from '@/components/shared/icons'

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const form = useForm<RegisterUserSchemaInput>({
    resolver: zodResolver(RegisterUserSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(data: RegisterUserSchemaInput) {
    setIsLoading(true)

    await axios
      .post('/api/register', {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      })
      .then(() => {
        toast({
          title: 'Account created.',
          description: 'You have successfully created your account.',
        })
        signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl: '/',
        })
        setIsLoading(false)
      })
      .catch((error: any) => {
        toast({
          title: error.name,
          description: error.response.data.message || 'Something went wrong, please try again.',
          variant: 'destructive',
        })
        setIsLoading(false)
      })
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
          Continue
          <span className="sr-only">Continue</span>
        </Button>
      </form>
    </Form>
  )
}
