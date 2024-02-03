import { createContext, useState } from "react";


const UserContext = createContext();


const UserProvider = ({ children }) => {



const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
});


const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
};

const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
};

return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
        {children}
    </UserContext.Provider>
);

};



export  { UserProvider, UserContext };