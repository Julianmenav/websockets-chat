import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import chatIcon from "/favicon.svg";

const RoomForm = () => {
  const [user, loading] = useAuth();
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    // Redirect in case of user unloged. (wait untill it finish the loading)
    if (!loading && user == null && !state?.name) {
      return navigate("/");
    }
    // In case that the user comes from login page we use location state name
    //   If is not the case we will use user from local storage.
    if(!loading){
      const userName = state?.name || user.displayName
      setName(userName)
    }
  }, [user, loading]);
  
  const logout = () => {
    localStorage.clear();
    return navigate("/");
  };

  const joinRoom = () => {
    navigate(`/chat?room=${room}`, { state: { name: name } });
  };

  const htmlContent = (
    <>
      {user && (
        <div className="rounded-md border border-black mt-12 bg-white text-center font-bold w-fit px-5 py-2 text-red-600">
          <button onClick={logout}>LOGOUT</button>
        </div>
      )}
      <div className="roomFormComponent">
        <div className="roomFormHeader">
          <p>
            Join a Room{" "}
            <span>
              <img src={chatIcon} alt=""></img>
            </span>
          </p>
        </div>
        <form className="roomForm" onSubmit={joinRoom}>
          <div id="inputs">
            <label htmlFor="name">Name</label>
            <input id="name" className="input" onChange={(event) => setName(event.target.value)} value={name} required="required" pattern="[A-Za-z0-9]{1,10}[\s_-]?[A-Za-z0-9]{1,10}" />
            <label htmlFor="room">Room Number</label>
            <input type="tel" id="room" className="input" onChange={(event) => setRoom(event.target.value)} placeholder="4200" required="required" pattern="[0-9]{1,4}" />
          </div>
          <input type="submit" className="joinRoomButton" value="Join" />
        </form>
      </div>
    </>
  );

  return (
    <>
      {loading ? <div></div> : htmlContent}
    </>
  );
};

export default RoomForm;
