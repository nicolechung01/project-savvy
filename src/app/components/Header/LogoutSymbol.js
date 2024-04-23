import styles from "./HeaderButton.css"
import { useContext } from "react";
import UserContext from "../../../../context/UserContext";
import { useRouter } from "next/navigation";

function LogoutSymbol() {
    const { userData, setUserData} = useContext(UserContext);
    const router = useRouter();

    const handleLogout = () => {
        setUserData({ token: undefined, user: undefined });
        localStorage.removeItem('auth-token');
        router.push('/');
    }
    return (
        <button onClick={handleLogout} className="button">
            <img className="log-img" src="/assets/logout.png" />
        </button>
    )
}
export default LogoutSymbol;