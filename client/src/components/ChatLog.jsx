import React from "react";

const ChatLog = ({ messageList, id }) => {
  const isOwnMessage = (msg) => msg.id === id;
  //Check whether a message is the first message written by a person.
  const isFirstMessage = (msg, idx, msgArray) =>
    msgArray[idx + 1] === undefined || msg.id !== msgArray[idx + 1]["id"];

  const isJoinRoomText = (msg) => msg.id === "joinRoomTextId";

  return (
    <div className="messages">
      {messageList.map((msg, idx, arr) => {
        return isJoinRoomText(msg) ? (
          <div className="joinRoomText" key={idx}>
            <span>{msg.msg}</span>
          </div>
        ) : (
          <div
            className={`message ${msg.id === id ? "ownMessage" : null}`}
            key={idx}
          >
            {!isOwnMessage(msg) && isFirstMessage(msg, idx, arr) ? (
              <div className="messageAuthor">
                <span>{msg.name}</span>
              </div>
            ) : null}
            <div className="messageContent">
              <span>{msg.msg}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatLog;
