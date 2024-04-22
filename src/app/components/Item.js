import React, { useState } from 'react';
import styles from './Item.css';
import Link from 'next/link'

const Item = (props) => {

    return (    
        <li className='item-container'>
            <img src={props.img} className="item-img" alt={props.name} />
            <div className='item-info'>
                <p className='item-price'>{props.name}</p>
                <p className='item-price'>{props.price}</p>
            </div>
        </li>
    )
}

export default Item;
