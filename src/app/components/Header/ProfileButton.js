import styles from "./ProfileButton.css"

function ProfileButton() {
    return (
        <button className="profile-button">
            <img className="profile-img" src="/assets/user.png" />
        </button>    
    )
}

export default ProfileButton;