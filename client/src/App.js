import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat";
import RoomForm from "./components/RoomForm";

function App() {
  const [logged, setLogged] = useState(false);
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const joinRoom = (room, name) => {
    setRoom(room);
    setName(name);
    setLogged(true);
  };

  return (
    <div className="App">
      {logged ? 
        <Chat room={room} name={name} /> : 
        <RoomForm joinRoom={joinRoom} 
      />}
    </div>
  );
}

export default App;
