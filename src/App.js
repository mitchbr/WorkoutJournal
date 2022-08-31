import React, { useState, useEffect } from 'react';

import SideNav from './sideNav/sideNav.js'
import WorkoutsHeader from './workoutsHeader/workoutsHeader.js';
import WorkoutDetails from './workoutDetails/workoutDetails.js';

const LOCAL_STORAGE_KEY = "WorkoutIndex"

function App() {
    let workoutsList = ["August 28, 2022", "August 29, 2022", "August 30, 2022"];
    const [i, setI] = useState([]);

    useEffect(() => {
        const storedI = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedI) setI(storedI);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, i);
    }, [i])

    function changeWorkout(index) {
        setI(index);
    }

    return (
        <div className='scaffold'>
            <WorkoutsHeader />
            <SideNav navList={workoutsList} changeWorkout={changeWorkout} />
            <WorkoutDetails workout={workoutsList[i]} />
        </div>
    );
}

export default App;