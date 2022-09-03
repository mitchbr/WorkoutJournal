import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const WORKOUT_KEY = "WorkoutList"

function NewWorkout({ workouts, setWorkouts }) {
    // TODO: Map items to option tile
    // const options = ["Running", "Rock Climbing", "Biking", "Swimming", "Surfing", "Snowboarding"];
    // function optionsMap = options.map((item) => <option value=`${item}`>{item}</option>);
    const workoutNotes = useRef();
    const workoutDate = useRef();
    const workoutType = useRef();
    const workoutDuration = useRef();

    function handleAddWorkout(e) {
        const notes = workoutNotes.current.value;
        if (notes === '') return;
        const date = workoutDate.current.value;
        if (date === '') return;
        const type = workoutType.current.value;
        const duration = workoutDuration.current.value;

        setWorkouts(prevWorkouts => {
          return [...prevWorkouts, {
            date: date,
            type: type,
            duration: duration,
            notes: notes,
            id: uuidv4(),
        }]
        })
        workoutNotes.current.value = null
      }

    return (
        <div className="WorkoutDetails">
            <span>
                <h1>New Workout</h1>
                <h2>Date</h2>
                <input type="date" ref={workoutDate}></input>
                <h2>Duration</h2>
                <input ref={workoutDuration}></input> hours // TODO: What input?
                <h2>Workout Type</h2>
                <select ref={workoutType}>
                    <option value="Running">Running</option>
                    <option value="Rock Climbing">Rock Climbing</option>
                    <option value="Surfing">Surfing</option>
                </select>
                <h2>Notes</h2>
                <input ref={workoutNotes}></input>
                <br></br><br></br>
                <button onClick={handleAddWorkout}>Submit Workout</button>
            </span>
        </div>
    );
}

export default NewWorkout;