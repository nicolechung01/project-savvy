import styles from "./HeaderButton.css"
import Link from "next/link";
import UserContext from "../../../../context/UserContext";
import { useContext } from "react";

function ProfileButton() {
    const { userData } = useContext(UserContext);

    const isLoggedIn = userData && userData.token;

    return (
        <button className="profile-button">
            <Link href={isLoggedIn ? '/profile' : '/login'}>
                <img className="profile-img" src="/assets/user.png" />
            </Link>
        </button>
    );
}

export default ProfileButton;