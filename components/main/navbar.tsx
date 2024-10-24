import { Button } from '@/components/ui/button';

import Link from 'next/link';
import ThemeSwitcher from '@/components/ui/theme-switcher';
import { UserNav } from '../auth/user-nav';
import { auth } from '../../auth';
import { SignIn } from '../auth/signin-button';
import { SignOut } from '../auth/signout-button';

export default async function Navbar() {
  const session = await auth();

  const user = session?.user;

  return (
    <nav className='border-b bg-background h-[10vh] flex items-center'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <h1 className='font-bold text-3xl'>
            Berkcan
            <span className='text-primary'>SaaS</span>
          </h1>
        </Link>
        <div className='flex items-center gap-x-5'>
          <ThemeSwitcher />
          {user ? (
            <UserNav
              user={{
                name: user?.name as string,
                email: user?.email as string,
                image: user?.image as string,
              }}
            />
          ) : (
            <div className='flex items-center gap-x-5'>
              <SignIn />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
