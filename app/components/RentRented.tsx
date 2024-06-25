import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const RentRented = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedButton(index); // This sets the selected button's index
  };

  return (
    <div className='flex justify-around items-center'>
      <div>
        <Button
          className={`w-40 rounded-none px-4 py-2 ${
            selectedButton === 0 ? 'text-white bg-lightGreen' : 'bg-grey'
          } focus:outline-none `}
          onClick={() => handleClick(0)}
        >
          My Listed Tools
        </Button>
        <Button
          className={`w-40 rounded-none px-4 py-2 ${
            selectedButton === 1 ? 'text-white bg-darkGreen' : 'bg-grey'
          } focus:outline-none`}
          onClick={() => handleClick(1)}
        >
          My Requests
        </Button>
      </div>
    </div>
  );
};

export default RentRented;
