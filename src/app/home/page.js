"use client";
import {useState} from 'react';
import ItemsList from "../components/ItemsList.js";

export default function Home() {

    const [homeList, setHomeList] = useState([]);

    const addHomeHandler = item => {
        setHomeList((prevHomeList) => [...prevHomeList, item]);
    };

    return (
        <div>
            <h1 style={{color: "black"}}>Home</h1>
            <ItemsList items={homeList} />
        </div>
    )
}