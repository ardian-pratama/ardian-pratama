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

export const Route = createFileRoute('/(auth)/sign-up/')({
  component: SignUp,
})

function SignUp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Memulai Langkah Pertama</CardTitle>
        <CardDescription className="text-center">
          Setiap perjalanan besar selalu dimulai dari satu langkah kecil
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
            Pernah melangkah sebelumnya?{' '}
            <Link to="/sign-in" className="font-semibold text-blue-500">
              Lanjutkan jejak
            </Link>
          </FieldDescription>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
