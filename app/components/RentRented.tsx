import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const RentRented = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(
    'listedTools'
  );

  const handleClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className='flex justify-around items-center'>
      <div>
        <button
          className={`w-40 rounded-none rounded-tl-lg rounded-bl-lg px-4 py-2    ${
            activeComponent === 'listedTools'
              ? 'bg-lightGreen text-white md:hover:bg-darkGreen'
              : 'bg-gray-200 text-gray-700'
          }  transition ease-in-out duration-500`}
          onClick={() => handleClick('listedTools')}
        >
          My Listed Tools
        </button>
        <button
          className={`w-40 rounded-none rounded-tr-lg rounded-br-lg px-4 py-2 ${
            activeComponent === 'myRequests'
              ? 'bg-lightGreen text-white md:hover:bg-darkGreen'
              : 'bg-gray-200 text-gray-700'
          } transition ease-in-out duration-500 `}
          onClick={() => handleClick('myRequests')}
        >
          My Requests
        </button>
      </div>
    </div>
  );
};

export default RentRented;
