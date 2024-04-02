import SignInButton from "./SignInButton";
import LogInButton from "./LogInButton";
import styles from "./Cover.css"

function Cover() {
    return (
        <div className="cover-container" >
            <img className="img" src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" />
            <div className="button-container">
                <SignInButton className="cover-button" />
                <LogInButton className="cover-button" />
            </div>
        </div>
    )
}
export default Cover;