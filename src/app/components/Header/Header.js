import SearchBar from "./SearchBar.js"
import LogoutSymbol from "./LogoutSymbol.js"
import CartButton from "./CartButton.js"
import ProfileButton from "./ProfileButton.js"
import styles from "./Header.css"
import Link from 'next/link';
import { useContext } from "react";
import UserContext, { UserProvider } from "../../../../context/UserContext.js";


function Header() {
    const {userData} = useContext(UserContext);
    return (
        <UserProvider>
        <header className="header-container">
            <Link href='/'>
                <h1 className="logo">savvy</h1>
            </Link>
            <SearchBar className="searchBar" />
            <nav className="nav">
                { userData.token && <LogoutSymbol className="button" />}
                <CartButton className="button" />
                <ProfileButton className="button" />
            </nav>
        </header>
        </UserProvider>
    )
};

export default Header;