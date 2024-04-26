import { useState, useContext, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import UserContext from '../../../../context/UserContext';
import ItemsList from './ItemsList';

function UserItemsList() {
    const {userData} = useContext(UserContext);
    const userId = userData?.user?.id;

    const [items, setItems] = useState([]);
    console.log(userData);

    // request to database goes here
    useEffect(() => {
        const fetchItems = async () => {
            try {
                if (userId) {
                    const response = await axios.get(`http://localhost:8082/api/items/${userId}`);
                    setItems(response.data);
                }
            } catch (error) {
                console.error('Retrieval failed:', error);
            }
        };
        fetchItems();
    }, [userId]); // Fetch items whenever userId changes

    return (
        <ItemsList items={items} />
    )
}
export default UserItemsList;