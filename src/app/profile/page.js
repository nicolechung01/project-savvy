"use client";
import React, { useState } from 'react';
{/*import styles from './profile.css';*/}
import styles from '../App.css';
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ItemsList from '../components/ItemsList';
import AddItemButton from '../components/Listing/AddItemButton';
import { UserProvider } from '../../../context/UserContext';

export default function Profile() {

    const [userItemsList, setUserItemsList] = useState(); //setList will be used with fetching data from db
    
    const addItemHandler = (newItem) => {
        setUserItemsList(prevItems => [...prevItems, newItem]);
    };

    return (
        <UserProvider>
            <main className="main">
                <Header />
                <Banner />
                <div className='content'>
                    <div className='subheader-container'>
                        <h1 className='subheader'>Selling</h1>
                    </div>
                    <div className='subheader-container'>
                        <ItemsList itemsList={userItemsList} />
                    </div>
                </div>
            </main>
        </UserProvider>
        
    )
}