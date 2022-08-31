import './listTile.css';

function WorkoutTile({navListItem, changeWorkout, index}) {
    function highlight(e) {
        e.target.style.background = '#173347';
    }

    function unhighlight(e) {
        e.target.style.background = 'transparent';
    }

    function setChangeWorkout() {
        changeWorkout(index);
    }

    return (
        <div className="WorkoutTile" onMouseOver={highlight} onMouseOut={unhighlight} onClick={setChangeWorkout} >
            <li key={navListItem}>
                <h2>{navListItem}</h2>
            </li>
        </div>
    );
}

export default WorkoutTile;