'use client';
import React, { useState, useEffect } from 'react';
import { ToolCategory } from '../../lib/types';
import { ToolCard } from '../../lib/types';
import { v4 as uuidv4 } from 'uuid';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// type FormInput = {
//   name: string;
//   description: string;
//   location: string;
//   dailyRate: number;
//   weeklyRate?: number;
//   monthlyRate?: number;
//   picture?: string;
//   liked: boolean;
//   available: boolean;
//   ownerId: string;
// };

const Form = () => {
  const [input, setInput] = useState<ToolCard>({
    name: '',
    description: '',
    location: '',
    dailyRate: 0,
    liked: false,
    available: true,
    ownerId: 'f4bb67e8-bcc9-4498-ade3-7cce2b8d65ce',
    id: uuidv4(),
    reviews: [],
    toolCategoryId: '5d20758d-db49-45b6-a9a6-fff4085d5804',
  });
  const [categories, setCategory] = useState<ToolCategory[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch('/api/categories');
        const data: ToolCategory[] = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchCategory();
  }, []);
  console.log(categories);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInput((prevData) => ({
      ...prevData,
      [name]:
        name === 'dailyRate' || name === 'weeklyRate' || name === 'monthlyRate'
          ? parseInt(value)
          : value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      ...input,
    };

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log('API response:', responseData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='flex justify-center items-center'>
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
          <label htmlFor='description' className='mb-1'>
            Product Description
          </label>
          <input
            className='mb-4 border-b-2'
            id='description'
            name='description'
            type='text'
            placeholder='Describe your product'
            value={input.description}
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
            <label htmlFor='category' className='mb-1'>
              Category
            </label>
            <Select
              onValueChange={(value) => handleSelectChange('category', value)}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Pick a category' />
              </SelectTrigger>
              {/* <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category._id} value={category._id}>
                    {category.categoryName}
                  </SelectItem>
                ))}
              </SelectContent> */}
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
