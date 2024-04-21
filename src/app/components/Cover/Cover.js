import SignUpButton from "./SignUpButton";
import LogInButton from "./LogInButton";
import styles from "./Cover.css"
import { useRouter } from 'next/navigation'
import UserContext, { UserProvider } from "../../../../context/UserContext";
import { useContext } from "react";


function Cover() {
    const { userData } = useContext(UserContext);

    return (
        <UserProvider>
            <div className="cover-container" >
                <div className="cover-img-container">
                    <img className="cover-img" src="/assets/cover-img.jpg" />
                </div>
                {!userData.token && (
                    <div className="button-container">
                        <SignUpButton />
                        <LogInButton />
                    </div>
                )}
            </div>
        </UserProvider>
        
    )
}
export default Cover;