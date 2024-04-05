"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from "../components/Header/Header.js"
import styles from '../App.css';

export default function Men() {

    const [mensList, setMensList] = useState([
        {
            img: '/assets/mensweatshirt.jpg',
            description: 'green long sleeve shirt',
            size: 'small',
            condition: 'Used - Good'
        }
    ]);

    const addMensHandler = item => {
        setMensList((prevMensList) => [...prevMensList, item]);
    };

    return (
        <main className="main">
            <Header />
            <div className='content'>
                <h1 className='title'>Mens's</h1>
                <ItemsList items={mensList} />
            </div>
        </main>
    )
}