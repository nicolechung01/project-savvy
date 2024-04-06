import React from 'react';

import styles from "../Item.css"

const NewItem = (props) => {
    return (
        <li className="item-container">
            <img className="item-img" src={props.img} alt={props.name} />
            <h3>{props.name}</h3>
            {/*<p>{props.description}</p>*/}
        </li>
    );
};

export default NewItem;