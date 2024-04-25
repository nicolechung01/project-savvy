import LogOutButton from './LogOutButton';
import ListItemButton from './ListItemButton';
import styles from './Banner.css';
import { useRouter } from 'next/navigation'
import { useContext } from 'react';
import UserContext from '../../../../context/UserContext';

function Banner() {
    const {userData} = useContext(UserContext);

    const userId = userData?.user?.id;
    const username = userData?.user?.username;


    return (
        <div>
            <div className="banner">
                <div className='profile-disp'>
                    <div className="pictureArea">
                        <img src="/assets/profilepic.jpeg" alt="Profile Picture" className="profilePicture" />
                    </div>
                    <div className="userInfo">
                        <h1 className='username'>{username}</h1>
                        <p className='bio'>atl-based, dm for questions.</p>
                    </div>
                </div>
                    <div className='nav-container'>
                        <div className="list-item">
                            <ListItemButton />
                        </div>
                        <div className="logout">
                            <LogOutButton />
                        </div>
                    </div>
            </div>
            
        </div>
    )
}

export default Banner;