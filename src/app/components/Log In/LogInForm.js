import styles from "./LogInForm.css"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import Link from 'next/link';

function LogInForm() {

    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        router.push('../profile');
    };

    useEffect(() => {

    }, []);

    return (
        <form onSubmit={handleLogin}>
            <div className="form-container">
                <div className="label-container">
                    <label className="form-label">Username</label>
                </div>
                <input className="form-input"
                type="text"
                id="first"
                />
                <div className="label-container">
                    <label className="form-label">Password</label>
                </div>
                <input className="form-input"
                type="password"
                id="password"
                />
                <div>
                    <button className="form-button" type="submit">
                        <Link href='../profile'>Log In</Link>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default LogInForm;