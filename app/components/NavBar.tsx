'use client';
import React from 'react';
import {
  MagnifyingGlassIcon,
  HeartIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

<<<<<<< HEAD
=======


>>>>>>> 184e280523bfe684eed9b1ced5eb2ca0b0527882
const NavBar = () => {
  const currentPath = usePathname();

  return (
    <div className=' fixed bg-white inset-x-0 bottom-0 border-t  border-grey h-20 shadow-md'>
      <div className='flex justify-around items-center h-full p-4'>
<<<<<<< HEAD
        <Link href='/'>
          <MagnifyingGlassIcon
            className={
              currentPath === '/'
=======
        <Link href='/explore'>
          <MagnifyingGlassIcon
            className={
              currentPath === '/explore'
>>>>>>> 184e280523bfe684eed9b1ced5eb2ca0b0527882
                ? 'size-8 stroke-darkGreen stroke-2'
                : 'size-8 stroke-grey stroke-2'
            }
          />
        </Link>
        <Link href={'/whishlist'}>
          {/* test */}
          <HeartIcon
            className={
              currentPath === '/whishlist'
                ? 'size-8 stroke-darkGreen stroke-2'
                : 'size-8 stroke-grey stroke-2'
            }
          />
        </Link>

        <Link href='/rented'>
          <WrenchScrewdriverIcon
            className={
              currentPath === '/rented'
                ? 'size-8 stroke-darkGreen stroke-2'
                : 'size-8 stroke-grey stroke-2'
            }
          />
        </Link>
        <Link href='/inbox'>
          <EnvelopeIcon
            className={
              currentPath === '/inbox'
                ? 'size-8 stroke-darkGreen stroke-2'
                : 'size-8 stroke-grey stroke-2'
            }
          />
        </Link>
        <Link href='/user'>
          <UserIcon
            className={
              currentPath === '/user'
                ? 'size-8 stroke-darkGreen stroke-2'
                : 'size-8 stroke-grey stroke-2'
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
