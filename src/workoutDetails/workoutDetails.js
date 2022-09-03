import './workoutDetails.css';
import '../index.css'

function WorkoutDetails({workout}) {
    return (
        <div className="WorkoutDetails">
            <span>
                <h1>{workout.date}</h1>
                <h2>Workout Type</h2>
                <p>{workout.type}</p>
                <h2>Duration</h2>
                <p>{workout.duration} hours</p>
                <h2>Workout Notes</h2>
                <p>{workout.notes}</p>
            </span>
        </div>
    );
}

export default WorkoutDetails;