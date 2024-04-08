import React from 'react';
import styles from './Item.css';
import Link from 'next/link'

const Item = (prop) => {
    console.log(prop);
    return (    
        <li key={props.id} className='item-container'>
            <img src={props.img} className="item-img" alt={props.name} />
            <p className='item-price'>{props.price}</p>
        </li>
    )
}

export default Item;
