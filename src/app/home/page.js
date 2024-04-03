"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from "../components/Header/Header.js"
import styles from '../App.css';

export default function Home() {

    const [homeList, setHomeList] = useState([]);

    const addHomeHandler = item => {
        setHomeList((prevHomeList) => [...prevHomeList, item]);
    };

    return (
        <main className="main">
        <Header />
            <h1 style={{color: "black"}}>Home</h1>
            <ItemsList items={homeList} />
        </main>
    )
}