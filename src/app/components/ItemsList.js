import React from 'react';
import Item from './Item';


const ItemsList = ({ items }) => {
  return (
    <div className="container">
      <ul>
        {items.map(item => (
          <Item
            key={item.id}
            img={item.img}
            description={item.description}
            size={item.size}
            condition={item.condition}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
