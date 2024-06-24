import React, { useState } from 'react';

const Liked: React.FC = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked); // Toggle the isLiked state
  };

  return (
    <div>
      <div className="favorite-icon" onClick={handleLike}>
        {isLiked ? '❤️' : '🤍'}
      </div>
    </div>
  );
};

export default Liked;
