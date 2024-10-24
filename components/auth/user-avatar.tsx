import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { auth } from '../../auth';

export default async function UserAvatar() {
  const session = await auth();

  return (
    <Avatar>
      <AvatarImage src={session?.user?.image ?? ''} alt='User Avatar' />
      <AvatarFallback>BC</AvatarFallback>
    </Avatar>
  );
}
