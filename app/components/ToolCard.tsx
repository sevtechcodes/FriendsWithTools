'use client'
import React, { useState } from 'react';
import { ToolCard as ToolType } from '../lib/types';
import {
  HeartIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { User } from '@prisma/client';
import prisma from '@/prisma/db';


export interface ToolCardProps {
  tool: ToolType;

}

const ToolCardComponent =  ( { tool }: ToolCardProps ) => {
  const defaultImage = 'https://shorturl.at/PyeKu'; //place holder image

  //TODO add filtering so if toolCard found in user wishlist, it will be disconnected
  const [isFavorite, setIsFavorite] = useState(false);

  const handleLike = async () => {
    tool.liked = tool.liked ? false : true;
    setIsFavorite(isFavorite ? false : true);
    
    try {
      const response = await fetch('/api/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tool)
      });
      console.log('gjkfhdgjkfdhsgkhfds', tool);
      const responseData = await response.json();
      console.log('WishList created', responseData);
      
    } catch (error) {
      console.error('Error adding to wishlist', error);
    }
  };

  return (
    <div className=" border-slate-50 border-4 p-4 rounded-xl shadow-md flex flex-col items-center m-4">
      <Link href={`/tools/${tool.id}`}>
        <div className="relative h-64 rounded-m overflow-hidden bg-cover w-80 bg-center " 
          style={{ backgroundImage: `url(${tool.picture || defaultImage})` }}>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-4 w-full mt-4">
        <div className="flex flex-col items-start">
          <p className="text-lg font-semibold">{tool.name}</p>
          <p className="text-gray-600">{tool.location}</p>
          <h2 className="text-gray-600">{tool.ownerId}</h2>
        </div>
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">${tool.dailyRate}</h1>
          <div className="relative text-[2rem] hover:cursor-pointer" onClick={handleLike}>{
            tool.liked ?
              <HeartIcon className='size-8 stroke-red-600 fill-red-600' />
              :
              <HeartIcon className='size-8 stroke-black' />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCardComponent;
