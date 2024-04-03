import Logo from "../components/Header/Logo";
import SignUpForm from "../components/Sign Up/SignUpForm";
import styles from "../login/LogInPage.css"

export default function Home() {
    return (
      <main className="main">
        <div className="logo-container">
          <Logo />
          <h1 className="title">Sign Up</h1>
          <SignUpForm />
        </div>
      </main>
    )
}