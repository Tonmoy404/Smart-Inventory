import React from 'react';
import './warehouse./warehouse.css';

const ItemCard = ({ itemName, itemDescription, itemQuantity, itemDate }) => {
  return (
    <div className="Item_card">
      <div className="Item_details">
        <div className="img">
          <i className="fa-solid fa-bowl-food"></i>
        </div>
        <div className="text">
          <h2>{itemName}</h2>
          <span>{itemDescription}</span>
        </div>
      </div>
      <div className="Item_Quantity">
        <h4>{itemQuantity}</h4>
        <span>{itemDate}</span>
      </div>
    </div>
  );
}

export default ItemCard;
