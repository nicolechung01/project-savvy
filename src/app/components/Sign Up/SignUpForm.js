import styles from "../../components/Log In/LogInForm.css"

function SignUpForm() {
    return (
        <form>
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
                    <button className="form-button" type="submit">Sign Up</button>
                </div>
            </div>
        </form>
    )
}

export default SignUpForm;