import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup } from '@/components/ui/field';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/(auth)/sign-up/')({
  component: SignUp,
});

function SignUp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-center'>Memulai Langkah Pertama</CardTitle>
        <CardDescription className='text-center'>
          Setiap perjalanan besar selalu dimulai dari satu langkah kecil
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <FieldDescription className='text-muted-foreground text-center'>
            Pernah melangkah sebelumnya?{' '}
            <Link
              to='/sign-in'
              className='font-semibold text-blue-500'
            >
              Lanjutkan jejak
            </Link>
          </FieldDescription>
        </FieldGroup>
      </CardContent>
    </Card>
  );
}
