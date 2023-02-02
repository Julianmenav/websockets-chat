import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import RoomCard from "../../components/RoomCard";
import UserCard from "../../components/UserCard";
import useAuth from "../../hooks/useAuth";

const RoomForm = () => {
  const [user, loading] = useAuth();
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

  const joinRoom = (roomNumber) => {
    // console.log(roomNumber)
    navigate(`/chat?room=${roomNumber}`, { state: { name: name } });
  };

  const htmlContent = (
    <section className="flex flex-col text-white w-full min-h-screen justify-center items-center">
      <UserCard name={name} user={user} logout={logout} />
      <div id="content" className="flex items-center">
        <div className="bg-black bg-opacity-40 rounded-lg px-6 pb-6">
          <p className="text-2xl font-bold py-3">Select a room to enter</p>
          <div className="grid  grid-cols-2 md:grid-cols-3 max-w-lg gap-3">
            {
              [...Array(9).keys()].map(n => <RoomCard fn={() => joinRoom(n+1)} room={n+1} key={n}/>)
            }
          </div>
        </div>
      </div>
  </section>
  );

  return (
    <>
      {loading ? <div></div> : htmlContent}
    </>
  );
};

export default RoomForm;
