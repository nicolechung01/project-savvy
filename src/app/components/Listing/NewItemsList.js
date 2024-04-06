import React from 'react';
import NewItem from './NewItem';
{/*import styles from "./NewItem.css"*/}
import styles from "../ItemsList.css";

const NewItemsList = ({ items }) => {
    return (
        <div className="container">
            <ul className='list'>
                {items.map(item => (
                    <NewItem
                        key={item.id}
                        img={item.img}
                        description={item.description}
                        size={item.size}
                        condition={item.condition}
                    />
                ))}
            </ul>
        </div>
    );
};

export default NewItemsList;