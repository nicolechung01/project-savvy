"use client";
import React, { useState } from 'react';
{/*import styles from './profile.css';*/}
import styles from '../App.css';
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import NewItemsList from "../components/Listing/NewItemsList"
import ItemsList from '../components/ItemsList';

export default function Home() {
    const initialItems = [
        {
            id: 1,
            name: "Pink Hoodie",
            img: "/assets/pinkhoodie.webp",
            description: "Cute and comfy Glossier hoodie. Clean and never used.",
            price: '$30.99',
            condition: "New"
        },
        {
            id: 2,
            name: "Black Running Shoes",
            img: "/assets/hoka.jpg",
            description: "Great running shoes from Hoka.",
            price: '$50',
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
            <div className='content'>
                <Banner />
                <div className='subheader-container'>
                    <h1 className='subheader'>Selling</h1>
                </div>
                <ItemsList items={items} />
            </div>
        </main>
    )
    }