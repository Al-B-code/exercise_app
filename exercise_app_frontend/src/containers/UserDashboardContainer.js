import DashboardSidebar from "../components/UserDashboardComponents/DashboardSiderbar";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import WeightTrackerTile from "../components/UserDashboardComponents/WeightTrackerTile";
import GoalsTile from "../components/UserDashboardComponents/GoalsTile";

const UserDashboardContainer = () => {









    // console.log(user); 


    useEffect(() => {


    }, [])




    return ( 
        <>
        <DashboardSidebar/>
        <WeightTrackerTile/>
        <GoalsTile/>
        </>
    );
}

export default UserDashboardContainer;