"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from "../components/Header/Header.js"
import styles from '../App.css';

export default function Home() {

    const [homeList, setHomeList] = useState([
        {
            id: 5,
            name: 'Metal Shoerack',
            img: '/assets/shoerack.jpg',
            description: 'metal shoerack',
            size: 'small',
            condition: 'Used - Good',
            price: '$15.00'
        },
        {
            id: 6,
            name: 'License Plate Tray',
            img: '/assets/tray.jpg',
            description: 'license plate tray',
            size: 'small',
            condition: 'Used - Good',
            price: '$9.00'
        }
    ]);

    const addHomeHandler = item => {
        setHomeList((prevHomeList) => [...prevHomeList, item]);
    };

    return (
        <main className="main">
            <Header />
            <div className='content'>
                <div className='subheader-container'>
                    <h1 className='subheader'>Home</h1>
                    <p className='result-num'>{homeList.length} results</p>
                </div>                
                <ItemsList items={homeList} />
            </div>
        </main>
    )
}