"use client";
import { UserProvider } from "../../../context/UserContext";
import Logo from "../components/Header/Logo";
import SignUpForm from "../../../forms/SignUpForm";
import styles from "../login/LogInPage.css"
import { useRouter } from 'next/navigation';

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