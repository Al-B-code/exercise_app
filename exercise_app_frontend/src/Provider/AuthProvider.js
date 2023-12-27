import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

const [token, setTokenState] = useState(localStorage.getItem("token"));

const setToken = (newToken) => {
    setTokenState(newToken);
};

// set headers to null by default. will be changed in the useEffect.
let headers = { 
    Authorization: null,
};

useEffect(() => {
    if (token) {
        headers = {
            Authorization: `Bearer ${token}`,
        };
        localStorage.setItem('token', token);
    } else {
        headers = {
            Authorization: null,
        };
        localStorage.removeItem('token');
    }

}, [token]); // not sure if this code will work. Likely needs to be tweaked to fit the fetch request. 


const contextValue = useMemo(
    () => ({
        token,
        setToken,
        headers,
    }),
    [token]
);

return (
    <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
);

};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;