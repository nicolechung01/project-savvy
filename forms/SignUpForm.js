import styles from "./LogInForm.css"
import { useState, useContext} from 'react';
import axios from 'axios';
import UserContext from "../context/UserContext";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
    const { setUserData } = useContext(UserContext);
    const [error, setError] = useState('');


    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        setError('');
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    
    const router = useRouter();

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
            });
            // update user data upon sign up
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            router.push('/');
        } catch (error) {
            console.error('Signup failed:', error);
            if (error.response && error.response.data && error.response.data.msg) {
                setError(error.response.data.msg);
            } else {
                setError('An unexpected error occurred. Please try again.');
            }   
        }
    };

    return (
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
                        Sign Up
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm;