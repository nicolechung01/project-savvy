import styles from "./ProfileButton.css"
import Link from "next/link";
import UserContext from "../../../../context/UserContext";
import { useContext } from "react";

function ProfileButton() {
    const { userData } = useContext(UserContext);

    return (
        <button className="profile-button">
            <Link href={userData ? '/profile' : '/login'}>
                <img className="profile-img" src="/assets/user.png" />
            </Link>
        </button>
    );
}

export default ProfileButton;