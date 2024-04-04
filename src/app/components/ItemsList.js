import React from 'react';
import Item from './Item';


const ItemsList = ({ items }) => {
  return (
    <div className="container">
      <ul>
        {items.map(item => (
          <Items
            key={user.id}
            img={user.img}
            name={user.name}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
