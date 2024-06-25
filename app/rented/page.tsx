'use client';
import React from 'react';
import NavBar from '../components/NavBar';
import RentRented from '../components/RentRented';
const RentedPage = () => {
  return (
    <div>
      <div>
        <RentRented />
      </div>
      <h1>Rented Tools</h1>
      <NavBar />
    </div>
  );
};

export default RentedPage;
