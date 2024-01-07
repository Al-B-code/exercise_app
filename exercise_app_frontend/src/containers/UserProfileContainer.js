import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";


const UserProfileContainer = () => {

    const { setToken, token, headers } = useAuth();
    const { userId } = useParams();
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {

        console.log("This is the token", JSON.stringify(token));
        fetchUserProfile(userId);
        if (token) {
            fetchUserProfile();
        }
    }, [userId, token])


    const fetchUserProfile = async () => {
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
            if (response.status == 403) {
                setError("Invalid permissions. You don't have access to this resource.")
            }
            const data = await response.json()
            setUserProfile(data);
            console.log(data);
        } catch (error) {
            console.error("error fetching user: ", error)
            console.log("Error fetching user: ", error)
            setError(`Error fetching data ${error}`)
        }
    }




    return ( 
        <div>
        <p>Hello from UserProfileContainer</p>

        {error && (
            <>
                <p>Error: {error}</p>
                {/* Display more information about the error if needed */}
            </>
        )}

        {userProfile ? (
            <>
                <p>Name: {userProfile.firstName}</p>
                <p>Email: {userProfile.email}</p>
                <p>Role: {userProfile.role}</p>
            </>
        ) : (
            error ? (
                <></>
            ) : (
                <p>Loading...</p>
            )
        )}
    </div>
    );
}

export default UserProfileContainer;