import styles from "./LogInForm.css"

function LogInForm() {
    return (
        <form>
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
                    <button className="form-button" type="submit">Log In</button>
                </div>
            </div>
        </form>
    )
}

export default LogInForm;