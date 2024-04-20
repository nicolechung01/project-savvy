import { useContext } from 'react';
import styles from './Banner.css';
import UserContext from '../../../../context/UserContext';
import { useRouter } from 'next/router';

const LogOutButton = () => {
    const { userData, setUserData } = useContext(UserContext);
    const router = useRouter();

    const handleLogout = () => {
        setUserData({ token: undefined, user: undefined }); // clear user data
        localStorage.removeItem('auth-token');
        router.push('/');
    };

    return (
        <button onClick={handleLogout} className="button">
        </button>
    )
}

export default LogOutButton;