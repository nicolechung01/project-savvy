import Link from 'next/link';
import styles from './Banner.css';

function EditProfileButton() {
    return (
        <button className="edit-button">
            <Link href='/account'>Edit Profile</Link>
        </button>
    )
}

export default EditProfileButton;