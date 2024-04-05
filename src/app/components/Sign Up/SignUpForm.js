import styles from "../../components/Log In/LogInForm.css"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Link from 'next/link';

function SignUpForm({onSignUp}) {
    
    const router = useRouter();

    const handleSignup = (e) => {
        e.preventDefault();
        onSignUp();

        router.push('../profile');
    };

    useEffect(() => {

    }, []);
    
    return (
        <form onSubmit={handleSignup}>
            <div className="form-container">
                <div className="label-container">
                    <label className="form-label">Name</label>
                </div>
                <input className="form-input"
                    type="text"
                    id="name"
                />
                <div className="label-container">
                    <label className="form-label">Create Username</label>
                </div>
                <input className="form-input"
                    type="text"
                    id="first"
                />
                <div className="label-container">
                    <label className="form-label">Create Password</label>
                </div>
                <input className="form-input"
                    type="password"
                    id="password"
                />
                <div>
                    <button className="form-button" type="submit">
                        <Link href='../profile'>Sign Up</Link>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm;