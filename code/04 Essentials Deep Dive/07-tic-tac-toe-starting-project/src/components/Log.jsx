function Log({turns}) {
    // Derive the game board from the turns state
    return (
        <ol id="log">
            {turns.map((turn) => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    <strong>{turn.player}</strong> selected square {turn.square.row}, {turn.square.col}
                </li>
            ))}
        </ol>
    );
}

export default Log;