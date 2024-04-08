import styles from "./Cover.css"
import Link from 'next/link';

function LogInButton() {
    return (
        <button className="cover-button">
            <Link href='/profile'>Log In</Link>
        </button>
    )
}
export default LogInButton;