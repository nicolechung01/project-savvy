"use client";
import { useContext } from "react";
import UserContext, { UserProvider } from "../../../context/UserContext";
import Logo from "../components/Header/Logo";
import SignUpForm from "../components/forms/SignUpForm";
import styles from "../login/LogInPage.css"


export default function SignUpPage() {
  return (
    <UserProvider>
      <main className="main">
        <div className="logo-container">
          <Logo />
          <h1 className="title">Sign Up</h1>
          <SignUpForm/>
        </div>
      </main>
    </UserProvider>
  )
}