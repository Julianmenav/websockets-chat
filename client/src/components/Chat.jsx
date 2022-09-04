import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatLog from "./ChatLog";

const serverURL = process.env.REACT_APP_SERVER_URL;
const socket = io.connect(serverURL);

const Chat = ({ room, name }) => {
  // Messages States
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);


  //Join Room and listen once for messages.
  useEffect(() => {
    console.log(`Entrando en la sala ${room}`);
    socket.emit("join_room", room);

    //Listener that we only want to active once.
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = () => {
    if(message === "") return
    const objMessage = { id: socket.id, msg: message, room: room, name: name };

    socket.emit("send_message", objMessage);
    setMessageList((prev) => [...prev, objMessage]);
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat">
      <div className="roomNumber">{`Room: ${room}`}</div>
      <ChatLog messageList={messageList} id={socket.id} />
      <div>
        <input
          className="inputMessage"
          onKeyDown={handleKeyDown}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Message to send..."
          value={message}
        />
        <button
          className="sendMessageButton"
          onClick={sendMessage}
          type="button"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Chat;
