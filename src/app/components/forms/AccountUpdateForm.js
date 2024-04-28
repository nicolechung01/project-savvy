import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../../../context/UserContext";
import { useRouter } from "next/navigation";
import { UserProvider } from "../../../../context/UserContext";
import styles from '../../account/ProfileUpdate.css';

const AccountUpdateForm = () => {

    const { userData, setUserData } = useContext(UserContext);
    const userId = userData?.user?.id; // used to update prof
    const [imageData, setImageData] = useState('');
    const router = useRouter();

    const [accountData, setAccountData] = useState({
        email: '',
        username: '',
        password: '',
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
        handleAccountChange(e);
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

    const handleAccountChange = (e) => {
        setAccountData({
            ...accountData,
            [e.target.name]: e.target.value
        });
    };

    const updateAccount = async (e) => {
        e.preventDefault();
        try {
            if (imageData !== '') {
                accountData.pfp = imageData;
            }
            
            const filteredAccountData = Object.fromEntries(
                Object.entries(accountData).filter(([key, value]) => value !== '')
            );
            
            const requestBody = {
                ...filteredAccountData,
            }
            await axios.put(`http://localhost:8082/api/users/${userId}`, requestBody);
            router.push('/profile'); 
        } catch (error) {
            console.log(error);
        }
    }
    
    const deleteAccount = async (e) => {
        try {
            await axios.delete(`http://localhost:8082/api/items/user/${userId}`);
            await axios.delete(`http://localhost:8082/api/users/${userId}`);
            setUserData({ token: undefined, user: undefined });
            localStorage.removeItem('auth-token');
            localStorage.removeItem('auth-user');
            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserProvider>
            <main className="main">
                <form onSubmit={updateAccount}>
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
                                    value={accountData.pfp}
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <div className="label-container">
                            <label className="form-label">Email</label>
                        </div>                        
                        <input className="form-input"
                            id="email-input"
                            name="email"
                            type="text"
                            value={accountData.email}
                            onChange={handleAccountChange}
                        />
                        <div className="label-container">
                            <label className="form-label">Username</label>
                        </div>                        
                        <input className="form-input"
                            id="username-input"
                            name="username"
                            type="text"
                            value={accountData.username}
                            onChange={handleAccountChange}
                        />
                        <div className="label-container">
                            <label className="form-label">Password</label>
                        </div>                        
                        <input className="form-input"
                            id="password-input"
                            name="password"
                            type="password"
                            value={accountData.password}
                            onChange={handleAccountChange}
                        />
                        <div className="label-container">
                            <label className="form-label">Bio</label>
                        </div>                        
                        <input className="form-input"
                            id="bio-input"
                            name="bio"
                            type="text"
                            value={accountData.bio}
                            onChange={handleAccountChange}
                        />
                        <div className="label-container">
                            <label className="form-label">Link</label>
                        </div>
                        <input className="form-input"
                            id="link-input"
                            name="link"
                            type="text"
                            value={accountData.link}
                            onChange={handleAccountChange}
                        />
                        <div className="error-container"></div>
                        <button className="form-button" type="submit">
                            Update Profile
                        </button>
                    </div>
                </form>
                <button onClick={deleteAccount} className="delete-button">
                    Delete Profile
                </button>
            </main>
        </UserProvider>
    )
}
export default AccountUpdateForm;