import SearchBar from "./SearchBar.js"
import LikesButton from "./LikesButton.js"
import CartButton from "./CartButton.js"
import ProfileButton from "./ProfileButton.js"
import styles from "./Header.css"
import Link from 'next/link';


function Header() {
    return (
        <header className="header-container">
            <Link href='/'>
                <h1 className="logo">savvy</h1>
            </Link>
            <SearchBar className="searchBar" />
            <nav className="nav">
                <LikesButton className="button" />
                <CartButton className="button" />
                <ProfileButton className="button" />
            </nav>
        </header>
    )
};

export default Header;