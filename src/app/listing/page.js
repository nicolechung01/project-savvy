"use client";
import { useState } from 'react';
import styles from './Listing.css';
import AddItem from '../components/Listing/AddItem';
import { UserProvider } from '../../../context/UserContext';
import Header from '../components/Header/Header';


export default function Listing() {

    return (
        <UserProvider>
            <div className='listing-form-main'>
                <Header />
                <AddItem />
            </div>
        </UserProvider>
    )
}