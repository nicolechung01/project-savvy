import LogOutButton from './LogOutButton';
import ListItemButton from './ListItemButton';
import styles from './Banner.css';
import { useRouter } from 'next/navigation'
import { useContext, useState, useEffect } from 'react';
import UserContext from '../../../../context/UserContext';
import axios from 'axios';

function Banner() {
    const {userData} = useContext(UserContext);
    const [user, setUser] = useState({}); // State to hold user data
    const userId = userData?.user?.id;
    const username = userData?.user?.username;

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                if (userId) {
                    // Fetch user data using userId
                    const response = await axios.get(`http://localhost:8082/api/users/${userId}`);
                    setUser(response.data); // Set the user data to the state
                }
            } catch (error) {
                console.error('Retrieval failed:', error);
            }
        };
        fetchUserData();
    }, [userId]); // Fetch user data whenever userId changes
   
    //user propgated with user data from db

    return (
        <div>
            <div className="banner">
                <div className='profile-disp'>
                    <div className="pictureArea">
                        <img src={user.pfp} alt="Profile Picture" className="profilePicture" />
                    </div>
                    <div className="userInfo">
                        <h1 className='username'>{username}</h1>
                        <p className='bio'>{user.bio}</p>
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