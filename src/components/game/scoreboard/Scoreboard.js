function Scoreboard(props) {
    return (
        <div id="scoreboard">
            <h2 id="current-score">Current score: {props.current}</h2>
            <h2 id="high-score">High score: {props.high}</h2>
        </div>
    );
}

export default Scoreboard