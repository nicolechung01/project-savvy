"use client";
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import { UserProvider } from '../../../context/UserContext';
import { useSearchParams } from 'next/navigation';
import styles from '../App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ImageCarousel from '../components/Listing/ImageCarousel';

export default function Detailed() {

    const searchParams = useSearchParams()
    const itemId = searchParams.get('item');

    const [item, setItem] = useState(null); // Initialize state with null

    useEffect(() => {
        const fetchItem = async () => {
            try {
                if (itemId) {
                    const response = await axios.get(`http://localhost:8082/api/items/${itemId}`)
                    .then((res) => {     // handling promise from item read operation
                        setItem(response.data);     // setting item with response 
                    });
                }
            } catch (error) {
                console.error('Retrieval failed:', error);
            }
        };
        fetchItem(); // Call fetchItem function
    }, [itemId]); // Pass itemId as a dependency to useEffect
    
    return (
        <UserProvider>
        <main className="main">
            <Header />
            <div className="content">
            {item && ( // Render content only when item is not null
                <div className='item-disp'>
                    <div className='item-img-container'>
                        <ImageCarousel item={item} />
                    </div>
                    <div className='item-info-container'>
                        <h1 className='item-name'>{item.name}</h1>
                        <h2 className='item-info' style={{fontWeight: "600"}} >{item.price}</h2>
                        { item.brand !== '' && <h2 className='item-info'>Brand: {item.brand}</h2>}
                        { item.size !== '' && <h2 className='item-info'>Size: {item.size}</h2>}
                        <h2 className='item-info'>Condition: {item.condition}</h2>
                        <hr></hr>
                        <h3 className='item-info'>Description</h3>
                        <p className='description'>{item.description}</p>
                        <div className='add-button-container' >
                            <button className='add-button'>Add to Bag</button>
                        </div>
                    </div>
                </div>
            )}       
            </div>
        </main>
        </UserProvider>
    );
}
