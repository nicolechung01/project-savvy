import styles from "./Cover.css"
import Link from 'next/link';

function LogInButton() {
    return (
        <Link href='/login'><button className="cover-button">Log In</button></Link>
    )
}
export default LogInButton;