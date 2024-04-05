"use client";
import { useState } from 'react';
import styles from './Listing.css';
import AddItem from '../components/Listing/AddItem';


export default function Listing() {

    const [items, setItems] = useState([]);

    const handleNewItem = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };


    return (
        <AddItem onAddItem={handleNewItem} />
    )
}