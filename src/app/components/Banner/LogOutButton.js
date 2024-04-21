import { useContext } from 'react';
import styles from './Banner.css';
import UserContext from '../../../../context/UserContext';
import { useRouter } from 'next/navigation';

function LogOutButton () {
    const { userData, setUserData} = useContext(UserContext);
    const router = useRouter();

    const handleLogout = () => {
        setUserData({ token: undefined, user: undefined });
        localStorage.removeItem('auth-token');
        router.push('/');
    }
    return (
        <button onClick={handleLogout} className="button">
            Log Out
        </button>
    )
}

export default LogOutButton;