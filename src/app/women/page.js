"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from '../components/Header/Header.js';
import styles from '../App.css';

export default function Women() {

    const [womensList, setWomensList] = useState([]);

    const addWomensHandler = item => {
        setWomensList((prevWomensList) => [...prevWomensList, item]);
    };

    return (
        <main className="main">

            <Header />
            <h1 style={{color: "black"}}>Women's</h1>
            <ItemsList items={womensList} />
        </main>
        
    )
}