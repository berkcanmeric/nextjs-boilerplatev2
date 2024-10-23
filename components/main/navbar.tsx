import { Button } from '@/components/ui/button';

import Link from 'next/link';
import ThemeSwitcher from '@/components/ui/theme-switcher';
// import { UserNav } from './UserNav ';
export default async function Navbar() {
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
          {/* {(await isAuthenticated()) ? (
            <UserNav
              user={{
                name: user?.given_name as string,
                email: user?.email as string,
                image: user?.picture as string,
              }}
            />
          ) : ( */}
          {/* // <div className='flex items-center gap-x-5'>
            //   <LoginLink>
            //     <Button>Sign In</Button>
            //   </LoginLink>
            //   <div className='flex items-center gap-x-5'>
            //     <RegisterLink>
            //       <Button variant='secondary'>Sign Up</Button>
            //     </RegisterLink>
            //   </div>
            </div>
          )} */}
        </div>
      </div>
    </nav>
  );
}
