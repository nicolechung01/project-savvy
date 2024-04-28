import { useState, useContext, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import UserContext from '../../../../context/UserContext';
import ItemsList from './ItemsList';
import UserItem from './Item';
import LargeListItemButton from '../Banner/LargeListItemButton';

function UserItemsList() {
    const {userData} = useContext(UserContext);
    const userId = userData?.user?.id;

    const [items, setItems] = useState([]);
    console.log(userId);

    // request to database goes here
    useEffect(() => {
        const fetchItems = async () => {
            try {
                if (userId) {
                    const response = await axios.get(`http://localhost:8082/api/items/user/${userId}`);
                    setItems(response.data);
                }
            } catch (error) {
                console.error('Retrieval failed:', error);
            }
        };
        fetchItems();
    }, [userId]); // Fetch items whenever userId changes

    if (items.length === 0) {
        return (
        <div className="empty-container">
            <h3 className='sell-message'>You have not listed any items yet.</h3>
            <LargeListItemButton />
        </div>
        )
    }

    return (
        <div className="container">
            <ul className='list'>
                {items.map(item => (
                <UserItem
                    id={item._id}
                    name={item.name}
                    img={item.img1}
                    description={item.description}
                    size={item.size}
                    condition={item.condition}
                    price={item.price}
                />
                ))}
            </ul>
        </div>
    )
}
export default UserItemsList;