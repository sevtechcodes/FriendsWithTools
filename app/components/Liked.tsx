
'use client'
import React, { useState } from 'react';

const Liked = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked); // Toggle the isLiked state
		//TODO If liked send make it available on my Wishlist
			// if (!liked) {
			// 	addToWishlist(tool);
			// }
		};

  return (
    <div>
      <div className="absolute top-2 right-2 cursor-pointer text-2xl" onClick={handleLike}>
        {isLiked ? '❤️' : '🤍'}
      </div>
    </div>
  );
};

export default Liked;
