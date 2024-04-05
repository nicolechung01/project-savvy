import Link from 'next/link';
import styles from './Banner.css';

function LogOutButton() {
    return (
        <button className="logoutButton">
            <Link href='/'>Log Out</Link>
        </button>
    )
}

export default LogOutButton;