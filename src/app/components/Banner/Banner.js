import LogOutButton from './LogOutButton';
import styles from './Banner.css';
import { useRouter } from 'next/navigation'

function Banner() {
    return (
        <div className="main">
            <div className="banner">
                <div className="pictureArea">
                    <img src="/assets/profilepic.jpeg" alt="Profile Picture" className="profilePicture" />
                </div>
                <div className="userInfo">
                    <h1>USERNAME</h1>
                    <p>This is an example bio.</p>
                </div>
                <div className="logout">
                    <LogOutButton />
                </div>
            </div>
            
        </div>
    )
}

export default Banner;