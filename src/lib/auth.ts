import { createDatabaseClient } from '@/lib/database'
import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import { tanstackStartCookies } from 'better-auth/tanstack-start'

const database = await createDatabaseClient()

export const auth = betterAuth({
  database: mongodbAdapter(database),
  plugins: [tanstackStartCookies()],
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      accessType: 'offline',
      prompt: 'select_account consent',
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 60,
      strategy: 'compact',
    },
    deferSessionRefresh: true,
    storeSessionInDatabase: true,
  },
})
