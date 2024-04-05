import React from 'react';

import styles from "./NewItem.css"

const NewItem = ({ item }) => {
    return (
        <div className="new-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
    );
};

export default NewItem;