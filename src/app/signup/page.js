"use client";
import Logo from "../components/Header/Logo";
import SignUpForm from "../components/Sign Up/SignUpForm";
import styles from "../login/LogInPage.css"
import { useRouter } from 'next/navigation';


export default function SignUpPage() {
  const router = useRouter();

  const onSignUp = () => {
    // Handle signup logic
    // After successful signup, redirect to home page with query parameter indicating login status
    router.push({
        pathname: '../profile',
        query: { loggedIn: true }
    });
  }   

    return (
      <main className="main">
        <div className="logo-container">
          <Logo />
          <h1 className="title">Sign Up</h1>
          <SignUpForm onSignUp={onSignUp}/>
        </div>
      </main>
    )
}