import React, { useState } from "react";

const RoomForm = ({ joinRoom }) => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const handleClick = () => {
    if (room === "" || name === "") return;
    joinRoom(room, name);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (room === "" || name === "") return;
      joinRoom(room, name);
    }
  };

  return (
    <div className="roomForm">
      <div className="nameInput">
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div className="roomInput">
        <input
          className="roomInput"
          onKeyDown={handleKeyDown}
          onChange={(event) => setRoom(event.target.value)}
          placeholder="Enter room"
        />
        <button className="joinRoomButton" onClick={handleClick} type="button">
          Join
        </button>
      </div>
    </div>
  );
};

export default RoomForm;
