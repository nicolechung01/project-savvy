import React from 'react';
import Item from './Item';
import styles from './ItemsList.css';


const ItemsList = ({ items }) => {
  return (
    <div className="container">
      <ul className='list'>
        {items.map(item => (
          <Item
            key={item.id}
            name={item.name}
            img={item.img}
            description={item.description}
            size={item.size}
            condition={item.condition}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemsList;
