import React from 'react';
import Item from './Item';
import styles from './ItemsList.css';
import LargeListItemButton from './Banner/LargeListItemButton';


const ItemsList = ({ items }) => {
  if (!items) {
    return (
      <div className="empty-container">
        <h3 className='sell-message'>You have not listed any items yet.</h3>
        <LargeListItemButton />
      </div>
    )
}

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
