import React from 'react';
import NavBar from '../../components/NavBar';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import UserTabs from '@/app/components/UserTabs';

const UserPage = () => {
  return (
    <div>
      <header className=' flex row-span-1 row py-4 px-8  border rounded border-solid border-zinc-400  bg-darkGreen items-center justify-start mb-1'>
        <Avatar className='h-14 w-14 mr-8'>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className='rounded-full' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='chat-info flex-col'>
          <p className='font-bold text-xl text-white'>John Doe</p>
          <p className='text-xs text-slate-50'>Created on June 25th, 2024</p>
        </div>
      </header>
      <UserTabs/>
    </div>
  );
};

export default UserPage;
