"use client";
import styles from './profile.css';
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"

export default function Home() {
    return (
        <main className="main">
            <Header />
            <div>
                <Banner />
            </div>
        </main>
    )
}