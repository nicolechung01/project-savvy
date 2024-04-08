import React from 'react';
import styles from './Item.css';
import Link from 'next/link'

const Item = (prop) => {
    console.log(prop);
    return (    
        <li className='item-container'>
                <img src={prop.img} className="item-img" />
                <div className='item-info'>
                    <p className='item-name'>{prop.name}</p>
                    <p className='item-price'>{prop.price}</p>
                </div>
        </li>
    )
}

export default Item;
