import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomForm = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const joinRoom = () => {
    navigate(`chat?room=${room}`, { state: { name: name } });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="roomForm">
      <form onSubmit={joinRoom}>
        <div className="nameInput">
          <input
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter name"
            required="required"
            pattern="[A-Za-z0-9]{1,20}"
          />
        </div>
        <div className="roomInput">
          <input
            className="roomInput"
            onKeyDown={handleKeyDown}
            onChange={(event) => setRoom(event.target.value)}
            placeholder="Enter room"
            required="required"
            pattern="[0-9]{1,20}"
          />
          <input type="submit" className="joinRoomButton" />
        </div>
      </form>
    </div>
  );
};

export default RoomForm;
