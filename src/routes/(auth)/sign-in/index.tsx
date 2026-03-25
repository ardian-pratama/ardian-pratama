import Google from '@/assets/icons/google.svg?react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field'
import { signInWithGoogle } from '@/lib/auth-client'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/sign-in/')({
  component: SignIn,
})

function SignIn() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Melanjutkan Langkah</CardTitle>
        <CardDescription className="text-center">
          Kembali ke perjalananmu dan lanjutkan setiap langkah yang tertunda
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <Button onClick={signInWithGoogle}>
              <Google /> Masuk dengan Google
            </Button>
          </Field>
          <FieldDescription className="text-muted-foreground text-center">
            Belum memulai langkah?{' '}
            <Link to="/sign-up" className="font-semibold text-blue-500">
              Mulai dari sini
            </Link>
          </FieldDescription>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
