import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import chatIcon from "../assets/favicon.svg";

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
        <p>Join a Room <span><img src={chatIcon} alt=""></img></span></p>
      </div>
      <form className="roomForm" onSubmit={joinRoom}>
        <div id="inputs" >
          <label for="name" >Name</label>
          <input
            id="name"
            className="input"
            onChange={(event) => setName(event.target.value)}
            placeholder="John Doe"
            required="required"
            pattern="[A-Za-z0-9]{1,10}[\s_-]?[A-Za-z0-9]{1,10}"
          />
          <label for="room" >Room Number</label>
          <input
            id="room"
            className="input"
            onChange={(event) => setRoom(event.target.value)}
            placeholder="4200"
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
