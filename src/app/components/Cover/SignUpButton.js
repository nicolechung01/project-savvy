import styles from "./Cover.css"
import Link from 'next/link';

function SignUpButton() {
    return (
        <button className="cover-button">
            <Link href='/signup'>Sign Up</Link>
        </button>
    )
}
export default SignUpButton;