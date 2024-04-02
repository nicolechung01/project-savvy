import SearchBar from "./SearchBar.js"
import LikesButton from "./LikesButton.js"
import CartButton from "./CartButton.js"
import ProfileButton from "./ProfileButton.js"
import styles from "./Header.css"

function Header() {
    return (
        <header className="container">
            <h1 className="logo">savvy</h1>
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