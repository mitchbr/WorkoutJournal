import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import SideNav from './sideNav/sideNav.js'
import WorkoutsHeader from './workoutsHeader/workoutsHeader.js';
import WorkoutDetails from './workoutDetails/workoutDetails.js';
import NewWorkout from './newWorkout/newWorkout.js';

const INDEX_KEY = "WorkoutIndex"
const WORKOUT_KEY = "WorkoutList"


function App() {
    const [i, setI] = useState(-1);
    const [workoutsList, setWorkoutList] = useState([]);
    useEffect(() => {
        const storedWorkouts = JSON.parse(localStorage.getItem(WORKOUT_KEY));
        if (storedWorkouts) setWorkoutList(storedWorkouts);
    }, []);

    useEffect(() => {
        localStorage.setItem(WORKOUT_KEY, JSON.stringify(workoutsList));
    }, [workoutsList]);

    useEffect(() => {
        const storedI = localStorage.getItem(INDEX_KEY);
        if (storedI) setI(storedI);
    }, []);

    useEffect(() => {
        localStorage.setItem(INDEX_KEY, i);
    }, [i])

    function changeWorkout(index) {
        setI(index);
    }

    return (
        <div className='scaffold'>
            <WorkoutsHeader />
            <SideNav navList={workoutsList} changeWorkout={changeWorkout} />
            {parseInt(i) === -1 ? <NewWorkout workouts={workoutsList} setWorkouts={setWorkoutList} /> : <WorkoutDetails workout={workoutsList[i]} />}
        </div>
    );
}

export default App;