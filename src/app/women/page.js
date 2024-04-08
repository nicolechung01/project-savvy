"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from '../components/Header/Header.js';
import styles from '../App.css';

export default function Women() {

    const [womensList, setWomensList] = useState([
        {
            id: '1',
            name: 'Green Long Sleeve Top',
            img: '/assets/womenshirt.jpg',
            description: 'green long sleeve shirt with flower detail',
            size: 'small',
            condition: 'Used - Good',
            price: '$14.00'
        },
        {
            id: '2',
            name: 'White Baggy Jeans',
            img: '/assets/womensjeans.jpg',
            description: 'white baggy jeans',
            size: 'medium',
            condition: 'Used - Good',
            price: '$20.00'
        }
    ]);

    const addWomensHandler = item => {
        setWomensList((prevWomensList) => [...prevWomensList, item]);
    };

    return (
        <main className="main">
            <Header />
            <div className='content'>
                <div className='subheader-container'>
                    <h1 className='subheader'>Women's</h1>
                    <p className='result-num'>{womensList.length} results</p>
                </div>
                <div>
                <ItemsList items={womensList} />
                </div>
            </div>
        </main>
        
    )
}