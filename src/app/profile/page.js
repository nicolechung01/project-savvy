"use client";
import React, { useState, useEffect, useContext } from 'react';
import styles from '../App.css';
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import UserItemsList from '../components/Listing/UserItemsList';
import UserContext from '../../../context/UserContext';
import { UserProvider } from '../../../context/UserContext';

export default function Profile() {
    return (
        <UserProvider>
            <main className="main">
                <Header />
                <Banner />
                <div className='content'>
                    <div className='subheader-container'>
                        <h1 className='subheader'>Selling</h1>
                    </div>
                    <div className='subheader-container'>
                    <UserItemsList />
                    </div>
                </div>
            </main>
        </UserProvider>
    )
}