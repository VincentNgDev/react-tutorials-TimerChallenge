import { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function handlePlayerName() {
    setPlayerName(playerNameRef.current.value);
  }
  return (
    <>
      <h2 className="text-hp-h2-txt-color my-4 text-3xl font-sans">
        Welcome {playerName}
      </h2>
      <p className="flex justify-center items-center">
        <input
          ref={playerNameRef}
          className="border border-solid border-hp-setname-border-color bg-hp-setname-input-bg-color rounded-tl-0.25 rounded-bl-0.25 p-0.3 text-hp-setname-input-txt-color"
        ></input>
        <button
          className="bg-hp-setname-btn-bg-color text-hp-setname-btn-txt-color border-hp-setname-border-color cursor-pointer py-0.4 px-4 rounded-tr-0.25 rounded-br-0.25 hover:bg-hp-setname-btn-hover-bg-color hover:border-hp-setname-btn-hover-border-color"
          onClick={handlePlayerName}
        >
          Set Name
        </button>
      </p>
    </>
  );
}
