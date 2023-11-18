import {useState} from 'react';

function Player({initialName, symbol, isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {
    setIsEditing(() => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChanges(event) {
    setPlayerName(event.target.value);
  }

  let editalbePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editalbePlayerName = <input type="text" required value={playerName} onChange={handleChanges}></input>;
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editalbePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;