"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from "../components/Header/Header.js"
import styles from '../App.css';

export default function Home() {

    const [homeList, setHomeList] = useState([
        {
            id: 5,
            img: '/assets/shoerack.jpg',
            description: 'metal shoerack',
            size: 'small',
            condition: 'Used - Good'
        },
        {
            id: 6,
            img: '/assets/tray.jpg',
            description: 'license plate tray',
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
                <div className='subheader-container'>
                    <h1 className='subheader'>Home</h1>
                    <p className='result-num'>{homeList.length} results</p>
                </div>                
                <ItemsList items={homeList} />
            </div>
        </main>
    )
}