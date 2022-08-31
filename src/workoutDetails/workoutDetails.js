import './workoutDetails.css';
import '../index.css'

function WorkoutDetails({workout}) {
    return (
        <div className="WorkoutDetails">
            <span>
                <h1>{workout}</h1>
                <h2>Workout Type</h2>
                <p>Running</p>
                <h2>Duration</h2>
                <p>2 miles</p>
                <h2>Workout Notes</h2>
                <p>Ran 2 miles, felt pretty good!</p>
            </span>
        </div>
    );
}

export default WorkoutDetails;