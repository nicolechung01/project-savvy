"use client";
import { useState } from 'react';
import styles from './Listing.css';
import AddItem from '../components/Listing/AddItem';
import { UserProvider } from '../../../context/UserContext';


export default function Listing() {
    const handleAddItem = (newItem) => {
        // Define logic to add the new item to the list
        // console.log("New item added:", newItem);
    };

    return (
        <UserProvider>
            <AddItem onAddItem={handleAddItem}/>
        </UserProvider>
    )
}