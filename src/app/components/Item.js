import React from 'react';
import styles from './Item.css';

const Item = (props) => {
    return (    
        <li key={props.id} className='item-container'>
            <img src={props.img} className="item-img" alt={props.name} />
            <p className='item-price'>${props.price}</p>
        </li>
    )
}

export default Item;
