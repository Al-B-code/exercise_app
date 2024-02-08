import "../../styles/ExerciseTileContainer.css"

const ExerciseTile = () => {


    const exerciseData = {
        exercise : "Run",
        distance : 5000,
        units : "kilometres",
        date : "08/02/2024",
    }


    return ( 

        <div className="exercise-tile-container">
            <p>Hello from exercise tile</p>
        </div>

     );
}
 
export default ExerciseTile;