"use client";
import { UserProvider } from "../../../context/UserContext";
import Logo from "../components/Header/Logo";
import LogInForm from "../components/forms/LogInForm";
import styles from "./LogInPage.css"

export default function LogInPage() {
  return (
    <UserProvider>
      <main>
        <div className="logo-container">
          <Logo />
          <h1 className="title">Log In</h1>
          <LogInForm />
        </div>
      </main>
    </UserProvider>
  )
}