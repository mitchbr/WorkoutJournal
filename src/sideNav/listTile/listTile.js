import './listTile.css';

function SideNavTile({title, key, changeWorkout, index}) {
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
        <div className="SideNavTile" onMouseOver={highlight} onMouseOut={unhighlight} onClick={setChangeWorkout} >
            <li key={key}>
                <h2>{title}</h2>
            </li>
        </div>
    );
}

export default SideNavTile;