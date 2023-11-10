import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import ItemCard from './ItemCard';
import './WareHouse.css'

const Warehouse = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      {/* Use the ItemCard component for each inventory item */}
      <ItemCard itemName="Foods" itemDescription="Meat, Milk, Vegetables, Fruits, etc." itemQuantity="100/200" itemDate="1 days ago" />
      {/* Add more ItemCard components for other inventory items */}
    </div>
  );
}

export default Warehouse;
