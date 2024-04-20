import { DEFAULT_SERIF_FONT } from "next/dist/shared/lib/constants";
import { createContext, useState, useEffect } from "react";
const UserContext = createContext();
export const UserProvider = ({ children}) => {
    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined,
    });

    useEffect(() => {
        //check for stored token in localStorage
        const token = localStorage.getItem('auth-token');
        if (token) {
            setUserData(prev => ({
                ...prev,
                token: token,
            }));
        }
    }, []);
    return (
        <UserContext.Provider value ={{ userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;