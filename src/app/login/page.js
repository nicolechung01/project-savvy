"use client";
import Logo from "../components/Header/Logo";
import LogInForm from "../components/Log In/LogInForm";
import styles from "./LogInPage.css"


export default function Home() {
    return (
      <main className="main">
        <div className="logo-container">
          <Logo />
          <h1 className="title">Log In</h1>
          <LogInForm />
        </div>
      </main>
    )
}