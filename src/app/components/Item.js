import React from 'react';

const Item = (props) => {
    return (    
        <li key={props.id}>
        <img src={props.img} className="item-img" alt={props.name} />
        <div className="item-info">
            <h2>{props.name}</h2>
        
        </div>
        </li>
    )
}

export default Item;
