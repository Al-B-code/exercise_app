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
            <p>Name: {user.firstname}</p>
            <p>email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
        </>
    );
}

export default UserDashboardContainer;