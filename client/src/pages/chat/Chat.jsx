import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { io } from "socket.io-client";
import ChatInput from "../../components/ChatInput";
import ChatLog from "../../components/ChatLog";
import UserCard from "../../components/UserCard";

const serverURL = import.meta.env.VITE_SERVER_URL;
const socket = io.connect(serverURL);

const Chat = () => {
  // Messages States
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const [searchParams] = useSearchParams();
  const { state } = useLocation();

  const name = state ? state.name : "Guest";
  const room = searchParams.get("room");
  //Join Room and listen once for messages.
  useEffect(() => {
    console.log(`Entrando en la sala ${room}`);
    const joinText = `${name} joined the room.`;
    const joinTextId = "joinRoomTextId";
    const data = { id: joinTextId, msg: joinText, room: room, name: name };
    socket.emit("join_room", data);

    //Listener that we only want to active once.
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [data, ...prev]);
    });

    socket.on("user_joined", (data) => {
      setMessageList((prev) => [data, ...prev]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = () => {
    const emptyOrWhiteSpaceRegex = /^(?![\s\S])|^( {1,})$/;

    if (emptyOrWhiteSpaceRegex.test(message)) return;
    const objMessage = { id: socket.id, msg: message, room: room, name: name };

    socket.emit("send_message", objMessage);
    setMessageList((prev) => [objMessage, ...prev]);
    setMessage("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const handleOnChange = (event) => setMessage(event.target.value);

  return (
    <>
      <UserCard name={name} />
      <div className="chat">
        <div className="roomNumber">{`Room: ${room}`}</div>
        <ChatLog messageList={messageList} id={socket.id} />
        <div id="separationLine"></div>
        <ChatInput message={message} handleKeyDown={handleKeyDown} handleOnChange={handleOnChange} sendMessage={sendMessage} />
      </div>
    </>
  );
};

export default Chat;
