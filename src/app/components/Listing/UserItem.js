import React, { useState } from 'react';
import styles from './Item.css';
import Link from 'next/link'

const UserItem = (props) => {

    return (    
        <Link href={{ pathname: '/details', query: { item: props.id}} }>
            <li className='item-container'>
                <img src={props.img} className="item-img" alt={props.name} />
                <div className='item-info'>
                    <p className='item-price'>{props.name}</p>
                    <p className='item-price'>{props.price}</p>
                </div>
            </li>
        </Link>
    )
}

export default UserItem;