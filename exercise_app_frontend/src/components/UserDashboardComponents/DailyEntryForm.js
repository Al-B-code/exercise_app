import { UserContext } from "../../contexts/UserContext";
import { useState, useContext, useEffect } from "react";
import { useAuth } from "../../Provider/AuthProvider";

const DailyEntryForm = () => {

    const { user } = useContext(UserContext);
    const { setToken, token, headers } = useAuth();




    const [dailyEntry, setDailyEntry] = useState({
        // userId: 1, // change this to userId upon submit. // possibly use token 
        date: new Date(), // todo: will need to change this mechanism for when updating old entries.
        weight: 0,
        calorieIntake: 0,
        sleepDuration: 0,
        mood: "",
    });

    useEffect(() => {
        console.log(user, "this is the user")

    })


    const submitDailyEntry = async (token) => {
        try {
            const response = await fetch('http://localhost:8080/daily-entries', {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dailyEntry)
                
            });
            if (!response.ok) {
                throw new Error(`HTTP error, Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("error submitting daily-entry user: ", error)
        }
    }


    const handleSubmit = (event) => {
        console.log(dailyEntry)
        
        event.preventDefault()
        submitDailyEntry(token) //add more error handling logic.
        setDailyEntry(
            {
                date: new Date(), // todo: will need to change this mechanism for when updating old entries.
                weight: 0,
                calorieIntake: 0,
                sleepDuration: 0,
                mood: "",
            }
        )

    }

    const handleDailyEntryFormChange = (event) => {
        const propertyName = event.target.name;
        const copiedDailyEntry = { ...dailyEntry};
        copiedDailyEntry[propertyName] = event.target.value;
        setDailyEntry(copiedDailyEntry);
        };





    return ( 
        <form id="daily-entry-form" onSubmit={handleSubmit}>
            <p>Registration Page</p>
            <label htmlFor="daily-entry-form">Please create your daily entry</label>

            <input
                id="weight"
                name="weight"
                type="number"
                placeholder="Please Enter Your Weight"
                value={dailyEntry.weight}
                onChange={handleDailyEntryFormChange}
            />

            <input
                id="calorieIntake"
                name="calorieIntake"
                type="number"
                placeholder="Please Enter Your Calorie Intake"
                value={dailyEntry.calorieIntake}
                onChange={handleDailyEntryFormChange}
            />

            <input
                id="sleepDuration"
                name="sleepDuration"
                type="number"
                placeholder="Please Enter Your Sleep Duration"
                value={dailyEntry.sleepDuration}
                onChange={handleDailyEntryFormChange}
            />

            <input
                id="mood"
                name="mood"
                type="text"
                placeholder="Please Enter Your Mood"
                value={dailyEntry.mood}
                onChange={handleDailyEntryFormChange}
            />


            <button type="submit">Submit</button>

        </form>


    );
}

export default DailyEntryForm;