import './sideNav.css';
import '../index.css'

import WorkoutTile from './listTile/listTile.js'

function SideNav({navList, changeWorkout}) {
    const navListItems = navList.map((item, index) => 
        <WorkoutTile title={item.date} key={item.id} changeWorkout={changeWorkout} index={index} />
    );

    const newWorkoutTile = <WorkoutTile title={'New Workout'} key={'NEW_ITEM'} changeWorkout={changeWorkout} index={-1} />;

    return (
        <div className="SideNav">
            <ul>
                {navListItems}
                {newWorkoutTile}
            </ul>
        </div>
    );
}

export default SideNav;