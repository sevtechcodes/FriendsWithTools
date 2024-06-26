import React from 'react';
import { ChevronLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Input } from '@/components/ui/input';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ChatView = () => {
  return (
    <>
      <header className=' flex items-center justify-start inset-x-0 top-0 border-t  border-grey h-20 shadow-md mb-1 bg-slate-200'>
        <Link href='/inbox'>
          <ChevronLeftIcon className="h-9 w-9 border m-4" />
        </Link>
        <p>Tool pic</p>
        <div className='chat-info flex-col ml-6'>
          <p className='font-bold'>Daily rate here</p>
          <p>Tool name here</p>
        </div>
      </header>
      <div>ChatView</div>
      <footer className=' fixed bg-white inset-x-0 bottom-0 border-t  border-grey h-20 shadow-md'>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
          <Input type="message" placeholder="Write something" />
          <Button type="submit"><PaperAirplaneIcon className="h-5 w-5" /></Button>
        </div>
      </footer>
    </>
  );
};

export default ChatView;