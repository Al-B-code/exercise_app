import { UserContext } from "../../contexts/UserContext";
import { useState, useContext, useEffect } from "react";
import { useAuth } from "../../Provider/AuthProvider";
import "../../styles/DailyEntryForm.css"

const DailyEntryForm = () => {

    const { user } = useContext(UserContext);
    const { setToken, token, headers } = useAuth();




    const [dailyEntry, setDailyEntry] = useState({
        date: new Date(), // todo: will need to change this mechanism for when updating old entries.
        weight: 0,
        calorieIntake: 0,
        sleepDuration: 0,
        mood: "",
    });

    // useEffect(() => {
    //     console.log(user, "this is the user")

    // })


    const submitDailyEntry = async (token) => {
        try {
            console.log(JSON.stringify(dailyEntry), "this is the stringified data")
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
        alert("Daily Entry Submitted")

    }

    const handleDailyEntryFormChange = (event) => {
        const propertyName = event.target.name;
        const copiedDailyEntry = { ...dailyEntry};
        copiedDailyEntry[propertyName] = event.target.value;
        setDailyEntry(copiedDailyEntry);
        };





    return ( 
        <form id="daily-entry-form" onSubmit={handleSubmit}>

            <label htmlFor="weight">Please enter your weight (Kg)</label>

            <input
                id="weight"
                name="weight"
                type="number"
                placeholder="Please Enter Your Weight"
                value={dailyEntry.weight}
                onChange={handleDailyEntryFormChange}
                min="30"
                step="any"
                required
            />
            
            <label htmlFor="calorie-intake">Please your daily calorie intake (kcal)</label>
            <input
                id="calorieIntake"
                name="calorieIntake"
                type="number"
                placeholder="Please Enter Your Calorie Intake"
                value={dailyEntry.calorieIntake}
                onChange={handleDailyEntryFormChange}
                required
            />

            <label htmlFor="sleep-duration">Please enter your sleep duration (hours)</label>
            <input
                id="sleepDuration"
                name="sleepDuration"
                type="number"
                placeholder="Please Enter Your Sleep Duration"
                value={dailyEntry.sleepDuration}
                onChange={handleDailyEntryFormChange}
                min="1"
                max="24"
                step="any"
                required
            />
            
            <label htmlFor="mood">Please describe your mood</label>
            <input
                id="mood"
                name="mood"
                type="text"
                placeholder="Please Enter Your Mood"
                value={dailyEntry.mood}
                onChange={handleDailyEntryFormChange}
                required
            />


            <button type="submit">Submit</button>

        </form>


    );
}

export default DailyEntryForm;