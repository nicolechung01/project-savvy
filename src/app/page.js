"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Header from "./components/Header/Header.js"
import Category from "./components/Category.js"
import Cover from "./components/Cover/Cover.js"
import styles from "./App.css";

export default function App() {

  const [logIn, setLogIn] = useState(false);

  const logInHandler = () => {
    setLogIn(true);
  }


  return (
    <main className="main">
      <Header />
      <div className="content">
        <Cover />
        <div className="category-main-container">
          <Category link=" /women" src="/assets/WOMENS.png" title="WOMEN'S" />
          <Category link=" /men" src="/assets/MENS.png" title="MEN'S" />
          <Category link=" /home" src="/assets/HOME.png" title="HOME" />
        </div>
      </div>
    </main>
  );
}
