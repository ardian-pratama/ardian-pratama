import { createAuthClient } from 'better-auth/client'

export const authClient = createAuthClient()

export async function signInWithGoogle() {
  const data = await authClient.signIn.social({
    provider: 'google',
  })
}

export async function signOut(token: string) {
  await authClient.revokeSession({
    token: token,
  })
}
