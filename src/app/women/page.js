"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from '../components/Header/Header.js';
import styles from '../App.css';

export default function Women() {

    const [womensList, setWomensList] = useState([
        {
            img: '/assets/womenshirt.jpg',
            description: 'green long sleeve shirt',
            size: 'small',
            condition: 'Used - Good'
        }
    ]);

    const addWomensHandler = item => {
        setWomensList((prevWomensList) => [...prevWomensList, item]);
    };

    return (
        <main className="main">
            <Header />
            <div className='content'>
                <h1 className='title'>Women's</h1>
                <ItemsList items={womensList} />
            </div>
        </main>
        
    )
}