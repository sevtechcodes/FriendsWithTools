
'use client';
import React from 'react';
import { ToolCard as ToolType, User } from '../lib/types';

interface LikedProps {
  tool: ToolType; 
  user: User;
}

const Liked = ({tool, user} : LikedProps)=> {
//no need for state, just change liked to true and add to user wishlist
  const addToWishlist = (tool: ToolType, user: User) => {
    tool.liked = true; // 
    console.log(`Added ${tool} to wishlist`);
  };


  return (
    <div>
      <div className="absolute top-2 right-2 cursor-pointer text-2xl" onClick={handleLike}>
        {tool.liked ? '❤️' : '🤍'}
      </div>
    </div>
  );
};

export default Liked;
