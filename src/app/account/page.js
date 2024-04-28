"use client";
import UserContext, { UserProvider } from '../../../context/UserContext';
import AccountUpdateForm from '../components/forms/AccountUpdateForm';
import Logo from '../components/Header/Logo';
import styles from './ProfileUpdate.css'

export default function Account() {
    
    return (
        <UserProvider>
            <main>
                <div className="logo-container">
                    <Logo />
                    <h1 className="title">Update Profile</h1>
                </div>
                <AccountUpdateForm />
            </main>
        </UserProvider>
    )
}