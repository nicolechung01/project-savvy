"use client";
import {useState, useEffect} from 'react';
import ItemsList from "../components/Listing/ItemsList.js";
import Header from '../components/Header/Header.js';
import styles from '../App.css';
import { UserProvider } from '../../../context/UserContext.js';
import axios from 'axios';

export default function Women() {

    const [womensList, setWomensList] = useState([]);
    //fetching all womens
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8082/api/items/category/Womens`);
                setWomensList(response.data);
            } catch (error) {
                console.error('Retrieval failed:', error);
            }
        };
        fetchItems();
    });

    return (
        <UserProvider>
            <main className="main">
                <Header />
                <div className='content'>
                    <div className='subheader-container'>
                        <h1 className='subheader'>Women's</h1>
                        <p className='result-num'>{womensList.length} results</p>
                    </div>
                    <div>
                    <ItemsList items={womensList} />
                    </div>
                </div>
            </main>
        </UserProvider>
    )
}