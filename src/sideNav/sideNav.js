import './sideNav.css';
import '../index.css'

import WorkoutTile from './listTile/listTile.js'

function SideNav({navList, changeWorkout}) {
    const navListItems = navList.map((item, index) => <WorkoutTile navListItem={item} changeWorkout={changeWorkout} index={index} />);

    return (
        <div className="SideNav">
            <ul>{navListItems}</ul>
        </div>
    );
}

export default SideNav;