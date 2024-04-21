import styles from "./LogInForm.css"
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from "../context/UserContext";
import { useRouter } from 'next/navigation';

const LogInForm = () => {
    const router = useRouter();
    const { userData, setUserData} = useContext(UserContext);

    // redirect is already logged in
    useEffect(() => {
        if(userData.token) {
            router.push('/');
        }
    }, [userData.token, router]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/api/users/login', formData);
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });
            // store authentication token in local storage
            localStorage.setItem("auth-token", response.data.token);
            console.log(userData.token);
            router.push('/');
        } catch (error) {
            console.error('Login failed:', error);
            // handle login error
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
                    <label className="form-label">Password</label>
                </div>
                <input className="form-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />
                <div>
                    <button className="form-button" type="submit">
                    Log In
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LogInForm;