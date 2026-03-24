import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
} from '@/components/ui/field';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/sign-in/')({
  component: SignIn,
})

function SignIn() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-center'>Melanjutkan Langkah</CardTitle>
        <CardDescription className='text-center'>
          Kembali ke perjalananmu dan lanjutkan setiap langkah yang tertunda
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <FieldDescription
              className="text-muted-foreground text-center"
            >
              Belum memulai langkah?{' '}
              <Link to="/sign-up" className="font-semibold text-blue-500">
                Mulai dari sini
              </Link>
            </FieldDescription>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
