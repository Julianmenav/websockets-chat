import React from "react";

const ChatLog = ({ messageList, id }) => {
  return (
    <ul className="messages">
      {messageList.map((msg, idx) => {
        return (
          <li
            className={`message ${msg.id === id ? "ownMessage" : null}`}
            key={idx}
          >{`${msg.id === id ? "" : msg.name + ":"} ${msg.msg}`}</li>
        );
      })}
    </ul>
  );
};

export default ChatLog;
