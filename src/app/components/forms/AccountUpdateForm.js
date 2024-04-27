import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../../../context/UserContext";
import { useRouter } from "next/navigation";
import { UserProvider } from "../../../../context/UserContext";
import styles from '../../account/ProfileUpdate.css';

const AccountUpdateForm = () => {

    const { userData } = useContext(UserContext);
    const userId = userData?.user?.id; // used to update prof
    const [imageData, setImageData] = useState('');
    const router = useRouter();

    const [profileData, setProfileData] = useState({
        pfp: '',
        bio: '',
        link: '',
    });

    const handleInputChange = (e) => { //for sign up portion
        setError('');
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        storeImage(e);
        handleProfileChange(e);
    };

    const storeImage = (e) => { //new

        //using compressed image
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setImageData(e.target.result);
                console.log(e.target.result);
            };
            reader.readAsDataURL(image);
        };
    }

    const handleProfileChange = (e) => { //for profile portion
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            if (imageData !== '') {
                profileData.pfp = imageData;
            }
            
            const filteredProfileData = Object.fromEntries(
                Object.entries(profileData).filter(([key, value]) => value !== '')
            );
            
            const requestBody = {
                ...filteredProfileData,
            }
            await axios.put(`http://localhost:8082/api/users/${userId}`, requestBody);
            router.push('/profile'); 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserProvider>
            <main className="main">
                <form onSubmit={updateProfile}>
                    <div className='form-container'>
                        <div className="label-container">
                            <label className="form-label">Profile Picture</label>
                        </div>
                        <div className='pfp-container'>
                            <div className="pfp-uploader">
                                <input id="pfp-input" 
                                    name="pfp"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                    value={profileData.pfp}
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div className="label-container">
                            <label className="form-label">Bio</label>
                        </div>                        
                        <input className="form-input"
                            id="bio-input"
                            name="bio"
                            type="text"
                            value={profileData.bio}
                            onChange={handleProfileChange}
                        />
                        <div className="label-container">
                            <label className="form-label">Link</label>
                        </div>
                        <input className="form-input"
                            id="link-input"
                            name="link"
                            type="text"
                            value={profileData.link}
                            onChange={handleProfileChange}
                        />
                        <div className="error-container"></div>
                        <button className="form-button" type="submit">
                            Update Profile
                        </button>
                    </div>
                </form>
            </main>
        </UserProvider>
    )
}
export default AccountUpdateForm;