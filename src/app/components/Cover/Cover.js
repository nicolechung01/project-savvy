import SignInButton from "./SignInButton";
import LogInButton from "./LogInButton";
import styles from "./Cover.css"

function Cover() {
    return (
        <div className="cover-container" >
            <div className="cover-img-container">
            <img className="cover-img" src="/assets/cover-img.jpg" />
            </div>
            <div className="button-container">
                <SignInButton />
                <LogInButton />
            </div>
        </div>
    )
}
export default Cover;