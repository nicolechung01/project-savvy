import styles from "./LogInForm.css"
import { useState, useContext} from 'react';
import axios from 'axios';
import UserContext from "../../../../context/UserContext";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
    const { userData, setUserData } = useContext(UserContext);
    const [error, setError] = useState('');
    const userId = userData?.user?.id; // used to update prof
    const [imageData, setImageData] = useState('');


    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

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

    const handleProfileChange = (e) => { //for profile portion
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };
    
    
    const router = useRouter();

    const handleImageChange = (e) => {
        storeImage(e);
        handleProfileChange(e);
    };


    const storeImage = (e) => {

        //using compressed image
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = function(e) {
                setImageData(e.target.result);
                
            };
            reader.readAsDataURL(image);
        };
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!formData.email || !formData.password || !formData.username || !formData.confirmPassword) {
                setError("Please fill in all fields");
            }
            if (formData.password.length < 6) {
                setError("Password should be at least 6 characters");
            }
            if (formData.confirmPassword !== formData.password) {
                setError("Passwords do not match");
            }
            await axios.post('http://localhost:8082/api/users/signup', formData);
            const loginRes = await axios.post('http://localhost:8082/api/users/login', {
                email: formData.email,
                password: formData.password
            })
            .then((res) => {        // handling promise from login post operation
                setUserData({       // setting userData with res
                    token: loginRes.data.token,
                    user: loginRes.data.user,
                });
                localStorage.setItem("auth-token", loginRes.data.token);
                localStorage.setItem('auth-user', JSON.stringify(loginRes.data.user)); // Stringify user data
            });
            
        } catch (error) {
            console.error('Signup failed:', error);
            if (error.response && error.response.data && error.response.data.msg) {
                setError(error.response.data.msg);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }   
        }
    };

    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            profileData.pfp = imageData;
            await axios.put(`http://localhost:8082/api/users/${userId}`, profileData)
            .then((res) => {        // handling promise from user update operation
                router.push('/profile');    // routing to profile client route
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        {!userData.token ? (
        <form onSubmit={handleFormSubmit}>
            <div className="form-container">
                <div className="label-container">
                    <label className="form-label">Email</label>
                </div>
                <input className="form-input"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <div className="label-container">
                    <label className="form-label">Create Username</label>
                </div>
                <input className="form-input"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
                <div className="label-container">
                    <label className="form-label">Create Password</label>
                </div>
                <input className="form-input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <div className="label-container">
                    <label className="form-label">Confirm Password</label>
                </div>
                <input className="form-input"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
                <div className="error-container">
                    {error && <p className="error-message">{error}</p>}
                </div>
                <div>
                    <button className="form-button" type="submit">
                        Continue
                    </button>
                </div>
            </div>
        </form>
        ) : (
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
                        Sign Up
                    </button>
                </div>
            </form>
        )}
        </>
    )
}

export default SignUpForm;