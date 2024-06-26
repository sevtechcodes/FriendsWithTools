'use client';
import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FormInput = {
  name: string;
  product: string;
  location: string;
  dailyRate: number;
  weeklyRate?: number;
  monthlyRate?: number;
  picture?: string;
  liked: boolean;
  available: boolean;
};

const Form = () => {
  const [input, setInput] = useState<FormInput>({
    name: '',
    product: '',
    location: '',
    dailyRate: 0,
    liked: false,
    available: false,
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setInput((prevData) => ({ ...prevData, [name]: value === 'true' }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(input);
  };

  return (
    <div className='flex content-center  '>
      <div className='w-full max-w-xs'>
        <div>
          <h1>Hello</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        >
          <label htmlFor='name' className='mb-1'>
            Product Name
          </label>
          <input
            className='mb-4 border-b-2'
            id='name'
            name='name'
            type='text'
            placeholder='What do you wish to rent?'
            value={input.name}
            onChange={handleChange}
            required
          />
          <label htmlFor='product' className='mb-1'>
            Product Description
          </label>
          <input
            className='mb-4 border-b-2'
            id='product'
            name='product'
            type='text'
            placeholder='Describe your product'
            value={input.product}
            onChange={handleChange}
            required
          />
          <label htmlFor='location' className='mb-1'>
            Pick up address
          </label>
          <input
            className='mb-4 border-b-2'
            id='location'
            name='location'
            type='text'
            placeholder='Where to pick up your tool?'
            value={input.location}
            onChange={handleChange}
            required
          />
          <div className='flex flex-row justify-between'>
            <label htmlFor='dailyRate' className='mb-1'>
              Daily rate
            </label>
            <input
              className='mb-4 border-b-2 w-20'
              id='dailyRate'
              name='dailyRate'
              type='number'
              placeholder='€'
              value={input.dailyRate}
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex flex-row justify-between'>
            <label htmlFor='weeklyRate' className='mb-1'>
              Weekly rate
            </label>
            <input
              className='mb-4 border-b-2 w-20'
              id='weeklyRate'
              name='weeklyRate'
              type='number'
              placeholder='€'
              value={input.weeklyRate || ''}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-row justify-between'>
            <label htmlFor='monthlyRate' className='mb-1'>
              Monthly rate
            </label>
            <input
              className='mb-4 border-b-2 w-20'
              id='monthlyRate'
              name='monthlyRate'
              type='number'
              placeholder='€'
              value={input.monthlyRate || ''}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-row justify-between'>
            <label htmlFor='image' className='mb-1'>
              Product image
            </label>
            <button className='bg-darkGreen p-2 text-white text-sm rounded-md'>
              Upload
            </button>
          </div>
          <div className='flex flex-row justify-between'>
            <label htmlFor='liked' className='mb-1'>
              Liked
            </label>
            <Select
              onValueChange={(value) => handleSelectChange('liked', value)}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Like' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='true'>True</SelectItem>
                <SelectItem value='false'>False</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className='flex flex-row justify-between'>
            <label htmlFor='available' className='mb-1'>
              Available
            </label>
            <Select
              onValueChange={(value: string) =>
                handleSelectChange('available', value)
              }
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Available' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='true'>True</SelectItem>
                <SelectItem value='false'>False</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <button
              type='submit'
              className='bg-darkGreen p-2 text-white text-sm rounded-md'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
