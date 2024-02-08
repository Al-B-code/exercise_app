import { useEffect } from "react";
import "../../styles/UserDashboard.css";


const GoalsTile = ({ goals }) => {


    useEffect(() => {

        console.log(goals, "this is in the goalstile")
        if (goals && goals.length > 0) {
            console.log(goals)
        }
    }, [goals])


    // think of a better name for the goal-tab
    const generateGoalsComponents = () => {
        return goals.map((goal, index) => (
            <>
            <div className="single-goal">
                <h2 key={goal.id}>{goal.goal}</h2>
                <p>Start Date: {new Date(goal.startDate).toLocaleDateString()}</p>
                <p>End Date: {new Date(goal.endDate).toLocaleDateString()}</p>
                <p>Completion Status: {goal.complete ? "Completed" : "Not Completed"}</p>
                <hr/>
            </div>
            </>
        ));
    }
    
    
    return (
        <div className="goals-tile-container">
        {goals !== null && goals !== undefined && goals.length > 0 ? generateGoalsComponents() : <p>No goals available</p>}
        </div>

    );
}
 
export default GoalsTile;