import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RoomForm = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const joinRoom = () => {
    navigate(`chat?room=${room}`, { state: { name: name } });
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
            onChange={(event) => setRoom(event.target.value)}
            placeholder="Enter room"
            required="required"
            pattern="[0-9]{1,4}"
          />
          <input type="submit" className="joinRoomButton" value="Join"/>
        </div>
      </form>
    </div>
  );
};

export default RoomForm;
