"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";

export default function Women() {

    const [womensList, setWomensList] = useState([]);

    const addWomensHandler = item => {
        setWomensList((prevWomensList) => [...prevWomensList, item]);
    };

    return (
        <div>
            <h1 style={{color: "black"}}>Women's</h1>
            <ItemsList items={womensList} />
        </div>
        
    )
}