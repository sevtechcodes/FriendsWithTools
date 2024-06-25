import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const RentRented = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <div className='flex justify-around items-center'>
      <div>
        <Button
          className={`w-40 rounded-none ${
            selectedButton === 0 ? 'text-white bg-lightGreen' : 'bg-darkGreen'
          }`}
          variant='outline'
          onClick={() => handleClick(0)}
        >
          My Listed Tools
        </Button>
        <Button
          className={`w-40 rounded-none ${
            selectedButton === 1 ? 'bg-lightGreen' : 'bg-darkGreen'
          }`}
          variant='outline'
          onClick={() => handleClick(1)}
        >
          My Requests
        </Button>
      </div>
    </div>
  );
};

export default RentRented;
