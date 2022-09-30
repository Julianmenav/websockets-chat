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
    <div className="roomFormComponent">
      <div className="roomFormHeader"> 
        <p>Join a Room</p>
      </div>
      <form className="roomForm" onSubmit={joinRoom}>
        <div id="inputs" >
          <input
            className="input"
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter your name"
            required="required"
            pattern="[A-Za-z0-9]{1,20}"
          />
          <input
            className="input"
            onChange={(event) => setRoom(event.target.value)}
            placeholder="Enter a room number"
            required="required"
            pattern="[0-9]{1,4}"
          />
        </div>
        <input type="submit" className="joinRoomButton" value="Join"/>
      </form>
    </div>
  );
};

export default RoomForm;
