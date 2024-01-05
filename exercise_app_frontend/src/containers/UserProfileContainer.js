import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";


const UserProfileContainer = () => {

    const { setToken, token, headers } = useAuth();
    const { userId } = useParams();
    const [userProfile, setUserProfile] = useState(null);



    useEffect(() => {

        console.log("This is the token", JSON.stringify(token));
        fetchUserProfile(userId);
    }, [userId])


    const fetchUserProfile = async (userId) => {
        try {
            const response = await fetch(`http://localhost:8080/user/${userId}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            })
            if (!response.ok) {
                throw new Error(`HTTP error, Status: ${response.status}`);
            }
            const data = await response.json()
            setUserProfile(data);
            console.log(data);
        } catch (error) {
            console.error("error fetching user: ", error)
        }
    }




    return ( 
        <>
        <p>hello from UserProfileContainer</p>
        {userProfile ? <p>name: {userProfile.firstName}</p> : <p>Loading</p>}
        {userProfile ? <p>email: {userProfile.email}</p> : <p>Loading</p>}
        {userProfile ? <p>name: {userProfile.role}</p> : <p>Loading</p>}
        </>
    );
}

export default UserProfileContainer;