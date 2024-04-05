"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from "../components/Header/Header.js"
import styles from '../App.css';

export default function Home() {

    const [homeList, setHomeList] = useState([
        {
            img: '/assets/shoerack.jpg',
            description: 'metal shoerack',
            size: 'small',
            condition: 'Used - Good'
        }
    ]);

    const addHomeHandler = item => {
        setHomeList((prevHomeList) => [...prevHomeList, item]);
    };

    return (
        <main className="main">
            <Header />
            <div className='content'>
                <h1 className='title'>Home</h1>
                <ItemsList items={homeList} />
            </div>
        </main>
    )
}