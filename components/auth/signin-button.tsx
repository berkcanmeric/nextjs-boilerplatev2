import { signIn } from '@/auth';
import { IconLogin } from '@tabler/icons-react';
import { Button } from '../ui/button';

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', { redirectTo: '/main' });
      }}
    >
      <Button className='w-full flex items-center justify-between'>
        Sign in
        <IconLogin className='h-4 w-4 ml-2' />
      </Button>
    </form>
  );
}
