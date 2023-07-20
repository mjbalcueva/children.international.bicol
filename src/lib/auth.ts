import { PrismaAdapter } from '@next-auth/prisma-adapter'
import bcrypt from 'bcrypt'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

import { db } from '@/lib/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials || {}

        if (!email) throw new Error('An email is required!')
        if (!password) throw new Error('A password is required!')

        const user = await db.user.findUnique({
          where: { email },
        })
        if (!user) throw new Error('Email not found!')

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) throw new Error('Invalid password!')

        return {
          id: user.id,
          name: user.firstName + ' ' + user.lastName,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async session({ token, session }) {
      if (token) session.user = token
      return session
    },

    async jwt({ token, user }) {
      const dbUser = await db.user
        .findUnique({
          where: { email: token.email! },
          select: {
            id: true,
            email: true,
            role: true,
            firstName: true,
            lastName: true,
          },
        })
        .then((dbUser) => {
          return {
            id: dbUser!.id,
            name: dbUser!.firstName + ' ' + dbUser!.lastName,
            email: dbUser!.email,
            role: dbUser!.role,
          }
        })

      if (!dbUser) return token
      return { ...dbUser, ...user }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
}
