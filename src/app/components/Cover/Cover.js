import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import styles from "./Cover.css"
import { useRouter } from 'next/navigation'


function Cover({logIn}) {

    return (
        <div className="cover-container" >
            <div className="cover-img-container">
            <img className="cover-img" src="/assets/cover-img.jpg" />
            </div>
            <div className="button-container">
                <SignUpButton />
                <LogInButton />
            </div>
        </div>
    )
}
export default Cover;