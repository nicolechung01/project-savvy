"use client";
import { useRouter } from 'next/router';
import Header from '../src/app/components/Header/Header';
import styles from './ItemDetailed.css';
import { UserProvider } from '../context/UserContext';

export default function Details() {
       const query = new URLSearchParams(this.props.location.search);
       const token = query.get('item');
       console.log(token);
    return (
        <UserProvider>
        <main className="main">
            <Header />
            <div className="content">
                <div className='item-disp'>
                    <div className='item-img-container'>
                        <img src='/assets/womenshirt.jpg' style={{height: "600px", width: "600px"}}/>
                    </div>
                    <div className='item-info-container'>
                        <h1 className='item-name'>Green Longsleeve Shirt</h1>
                        <h2 className='item-info' style={{fontWeight: "600"}} >$14.00</h2>
                        <h2 className='item-info'>Size: Small</h2>
                        <h2 className='item-info'>Condition: Used - Good</h2>
                        <hr></hr>
                        <h3 className='item-info'>Description</h3>
                        <p className='description'>green long sleeve shirt with flower detail</p>
                        <div className='button-container' >
                            <button>Buy Now</button>
                            <button>Add to Bag</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </UserProvider>
    );
}
