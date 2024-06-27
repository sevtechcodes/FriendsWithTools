'use client';
import ToolCardComponent from '@/app/components/ToolCard';
import { ToolCard } from '../../lib/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const WishlistPage = () => {

  const [favTools, setFavTools] = useState<ToolCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        const response = await fetch('/api/wishlist');
        const data: ToolCard[] = await response.json();
        setFavTools(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch tools:', error);
        setLoading(false);
      }
    };

    fetchTools();
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='h-full overflow-scroll'>
      <header className='fixed z-100 flex items-center justify-center inset-x-0 top-0 border-t  border-grey h-20 shadow-md mb-1 bg-darkGreen'>
        <h1 className='text-center text-xl font-bold text-white'>Wish List</h1>
      </header>
      <div className='wishlist-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24 mb-20 '>
        {favTools.length === 0 ?
          <div className='z-50 h-full flex flex-col justify-center align-middle text-center text-xl p-4 mt-56'>
            <div>Your wish list is empty ☹</div> 
            <div>Go check some nearby tools in the explore page! </div>
          </div>
          :
          favTools.map((tool) => (
            <div key={tool.id} className='tool-item'>
              <Link href={`/tools/${tool.id}`}>
                <ToolCardComponent tool={tool} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WishlistPage;
