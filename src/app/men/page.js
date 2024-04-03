"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";

export default function Men() {

    const [mensList, setMensList] = useState([]);

    const addMensHandler = item => {
        setMensList((prevMensList) => [...prevMensList, item]);
    };

    return (
        <div>
            <h1 style={{color: "black"}}>Men's</h1>
            <ItemsList items={mensList} />
        </div>
    )
}