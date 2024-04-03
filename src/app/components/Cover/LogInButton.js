import styles from "./Cover.css"
import Link from 'next/link';

function LogInButton() {
    return (
        <button className="cover-button">
            <Link href='/login'>Log In</Link>
        </button>
    )
}
export default LogInButton;