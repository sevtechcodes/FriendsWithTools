import React from 'react';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className='fixed inset-x-0 bottom-0 border-t-2 h-20'>
      <div className='flex justify-around items-center h-full p-4'>
        <Link href='/explore'>
          <MagnifyingGlassIcon
            style={{ color: 'var(--gray)' }}
            className='size-8 hover:text-light-green-500'
          />
        </Link>
        <Link href='/whishlist'>
          <HeartIcon
            style={{ color: 'var(--gray)' }}
            className='size-8 hover:text-light-green-500'
          />
        </Link>
        <Link href='/rented'>
          <WrenchScrewdriverIcon
            style={{ color: 'var(--gray)' }}
            className='size-8 hover:text-light-green-500'
          />
        </Link>
        <Link href='/inbox'>
          <EnvelopeIcon
            style={{ color: 'var(--gray)' }}
            className='size-8 hover:text-light-green-500'
          />
        </Link>
        <Link href='/user'>
          <UserIcon
            style={{ color: 'var(--gray)' }}
            className='size-8 hover:text-light-green-500'
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
