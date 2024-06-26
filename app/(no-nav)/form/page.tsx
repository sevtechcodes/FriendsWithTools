import React from 'react';

const Form = () => {
  return (
    <div className='w-full max-w-xs m-auto'>
      <div>
        <h1>Hello</h1>
      </div>
      <form className=' flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <label htmlFor='name' className='mb-1'>
          Product Name
        </label>
        <input
          className='mb-4 border-b-2'
          id='name'
          name='name'
          type='text'
          placeholder='What do you wish to rent?'
          required
        />
        <label htmlFor='description' className='mb-1'>
          Product Description
        </label>
        <input
          className='mb-4 border-b-2'
          id='product'
          name='product'
          type='text'
          placeholder='What do you wish to rent?'
          required
        />
        <h2>test</h2>
        <h2>test</h2>
      </form>
    </div>
  );
};

export default Form;
