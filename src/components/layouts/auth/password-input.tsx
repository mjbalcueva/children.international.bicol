'use client'

import '@/styles/hide-password-toggle.css'

import { forwardRef, useState } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input, InputProps } from '@/components/ui/input'
import { Icons } from '@/components/shared/icons'

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={(cn('pr-10', className), 'hide-password-toggle')}
        ref={ref}
        {...props}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={() => setShowPassword((prev) => !prev)}
        disabled={props.value === '' || props.value === undefined || props.disabled}
      >
        {showPassword ? (
          <Icons.hide className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Icons.view className="h-4 w-4" aria-hidden="true" />
        )}
        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
      </Button>
    </div>
  )
})
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
