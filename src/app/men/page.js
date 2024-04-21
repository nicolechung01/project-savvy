"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from "../components/Header/Header.js"
import styles from '../App.css';

export default function Men() {

    const [mensList, setMensList] = useState([
        {
            id: 3,
            name: 'Brown Sweatshirt',
            img: '/assets/mensweatshirt.jpg',
            description: 'brown sweatshirt',
            size: 'large',
            condition: 'Used - Good',
            price: '$20.00'
        },
        {
            id: 4,
            name: 'Navy Basketball Shorts',
            img: '/assets/menshorts.jpg',
            description: 'navy jersey shorts',
            size: 'small',
            condition: 'Used - Good',
            price: '$11.00'
        }
    ]);

    const addMensHandler = item => {
        setMensList((prevMensList) => [...prevMensList, item]);
    };

    return (
        <main className="main">
            <Header />
            <div className='content'>
                <div className='subheader-container'>
                    <h1 className='subheader'>Men's</h1>
                    <p className='result-num'>{mensList.length} results</p>
                </div>
                <ItemsList items={mensList} />
            </div>
        </main>
    )
}