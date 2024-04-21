import { useContext } from 'react';
import styles from './Banner.css';
import UserContext from '../../../../context/UserContext';
import { useRouter } from 'next/router';

function LogOutButton () {
    return (
        <button className="button">
            Log Out
        </button>
    )
}

export default LogOutButton;