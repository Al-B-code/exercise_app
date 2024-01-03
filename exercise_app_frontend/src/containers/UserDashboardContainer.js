import DashboardSidebar from "../components/UserDashboardComponents/DashboardSiderbar";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

const UserDashboardContainer = () => {


    const { user } = useContext(UserContext);
    



    console.log(user);


    useEffect(() => {


    }, [])




    return ( 
        <>
        <DashboardSidebar/>


        <div>
            {user ? <p>name: {user.firstName}</p> : <p>Loading</p>}
            {user ? <p>email: {user.email}</p> : <p>Loading</p>}
            {user ? <p>name: {user.role}</p> : <p>Loading</p>}
        </div>
        </>
    );
}

export default UserDashboardContainer;