"use client";
import {useState, useEffect} from 'react';
import ItemsList from "../components/ItemsList.js";
import Header from '../components/Header/Header.js';
import styles from '../App.css';

export default function Category({category}) {

    const [itemsList, setList] = useState([]); //setList will be used with fetching data from db


    return (
        <main className="main">
            <Header />
            <div className='content'>
                <div className='subheader-container'>
                    <h1 className='subheader'>{category}</h1>
                    <p className='result-num'>{itemsList.length} results</p>
                </div>
                <div>
                <ItemsList items={itemsList} />
                </div>
            </div>
        </main>
        
    )
}