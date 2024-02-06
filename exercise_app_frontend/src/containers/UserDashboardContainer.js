import DashboardSidebar from "../components/UserDashboardComponents/DashboardSiderbar";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import WeightTrackerTile from "../components/UserDashboardComponents/WeightTrackerTile";
import GoalsTile from "../components/UserDashboardComponents/GoalsTile";
import { useAuth } from "../Provider/AuthProvider";
import DailyEntryForm from "../components/UserDashboardComponents/DailyEntryForm";
// import "../styles/UserDashboard.css"


const UserDashboardContainer = () => {

const { setToken, token, headers } = useAuth();

const [dailyEntries, setDailyEntries] = useState(null);
const [goals, setGoals] = useState(null);

const [isOpen, setIsOpen] = useState(false);



    useEffect(() => {
        fetchDailyEntries();
        fetchGoals();
        // console.log(dailyEntries);
    }, []) // probably should have something in this dependency array?

const fetchDailyEntries = async () => {
    // Need to paginate the daily entries so that the tile only shows the first seven by default.
    try {
        const response = await fetch(`http://localhost:8080/daily-entries`, {
            // method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        const data = await response.json();
        setDailyEntries(data);
        // console.log("This is the daily entries", data);
    } catch (error) {
        console.error("error fetching daily entries: ", error)
        console.log("Error fetching daily entries: ", error)
        // setError(`Error fetching data ${error}`)
    }

}


// may change this to unCompleted goals fetch in the future. All goals right now for testing purposes.
const fetchGoals = async () => {
    try {
        const response = await fetch(`http://localhost:8080/goals`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })

        if (!response.ok) {
            throw new Error(`HTTP error, Status: ${response.status}`);
        }
        const data = await response.json();
        setGoals(data);
        console.log("This is the users goals", data);
    } catch (error) {
        console.error("error fetching goals: ", error)
        console.log("Error fetching goals: ", error)
    }
}






    return ( 
        <div className="user-dashboard-container">
            <DashboardSidebar setIsOpen={setIsOpen} isOpen={isOpen}/>
        <div className="main">
            <WeightTrackerTile dailyEntries={dailyEntries}/>
            <GoalsTile goals={goals}/>
        </div>
        {/* <DailyEntryForm/> */}
        </div>
    );
}

export default UserDashboardContainer;