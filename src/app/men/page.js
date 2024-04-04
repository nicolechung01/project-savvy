"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from "../components/Header/Header.js"
import styles from '../App.css';

export default function Men() {

    const [mensList, setMensList] = useState([]);

    const addMensHandler = item => {
        setMensList((prevMensList) => [...prevMensList, item]);
    };

    return (
        <main className="main">
        <Header />
            <h1 style={{color: "black"}}>Men's</h1>
            <ItemsList items={mensList} />
        </main>
    )
}