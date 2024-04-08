"use client";
import React, { useState } from 'react';
{/*import styles from './profile.css';*/}
import styles from '../App.css';
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ItemsList from '../components/ItemsList';
import AddItemButton from '../components/Listing/AddItemButton';

export default function Home() {
    const initialItems = [
        {
            id: 1,
            name: "Pink Hoodie",
            img: "/assets/pinkhoodie.webp",
            description: "Cute and comfy Glossier hoodie. Clean and never used.",
            price: '30.99',
            condition: "New"
        },
        {
            id: 2,
            name: "Black Running Shoes",
            img: "/assets/hoka.jpg",
            description: "Great running shoes from Hoka.",
            price: '50',
            condition: "Used"
        },
    ]

    const [items, setItems] = useState(initialItems);

    const addItemHandler = (newItem) => {
        setItems(prevItems => [...prevItems, newItem]);
    };

    return (
        <main className="main">
            <Header />
            <Banner />
            <div className='content'>
                <div className='subheader-container'>
                    <h1 className='subheader'>Selling</h1>
                </div>
                <div className='subheader-container'>
                    <ItemsList items={items} />
                </div>
            </div>
        </main>
    )
    }