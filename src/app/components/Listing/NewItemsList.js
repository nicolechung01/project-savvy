import React from 'react';
import NewItem from './NewItem';
import styles from "./NewItem.css"

const AddItemsList = ({ items }) => {
    return (
        <div className="add-items-list">
            {items.map(item => (
                <NewItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default AddItemsList;