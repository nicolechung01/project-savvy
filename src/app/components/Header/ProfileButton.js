import styles from "./ProfileButton.css"
import Link from "next/link";

function ProfileButton() {
    return (
        <button className="profile-button">
            <Link href='/profile'>
            <img className="profile-img" src="/assets/user.png" />
            </Link>
        </button>    
    )
}

export default ProfileButton;