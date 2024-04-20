import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import styles from "./Cover.css"


function Cover({loggedIn}) {

    return (
        <div className="cover-container" >
            <div className="cover-img-container">
            <img className="cover-img" src="/assets/cover-img.jpg" />
            </div>
            <div className="button-container">
                {!loggedIn && (
                    <>
                        <SignUpButton />
                        <LogInButton />
                    </>
                 )}
            </div>
        </div>
    )
}
export default Cover;