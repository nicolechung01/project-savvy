import { useState, useContext, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import UserContext from '../../../../context/UserContext';
import ItemsList from '../ItemsList';

function UserItemsList() {
    const {userData} = useContext(UserContext);
    const userId = userData?.user?.id;

    console.log(userData);

    const [items, setItems] = useState([]);

    // request to database goes here
    useEffect(() => {
        const fetchItems = async () => {
            try {
                if (userId) {
                    const response = await axios.get(`http://localhost:8082/api/items/${userId}`);
                    console.log(response);
                    setItems(response.data);
                }
            } catch (error) {
                console.error('Retrieval failed:', error);
            }
        };
        fetchItems();
    }, [userId]); // Fetch items whenever userId changes

    console.log(items);

    return (
        <ItemsList items={items} />
    )
}
export default UserItemsList;