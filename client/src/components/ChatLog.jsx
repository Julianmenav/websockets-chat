import React from "react";

const ChatLog = ({ messageList, id }) => {
  const isOwnMessage = (msg) => msg.id === id;
  //Check whether a message is the first message written by a person.
  const isFirstMessage = (msg, idx, msgArray) =>
    msgArray[idx + 1] === undefined || msg.id !== msgArray[idx + 1]["id"];

  return (
    <div className="messages">
      {messageList.map((msg, idx, arr) => {
        return (
          <div
            className={`message ${msg.id === id ? "ownMessage" : null}`}
            key={idx}
          >
            {!isOwnMessage(msg) && isFirstMessage(msg, idx, arr) ? (
              <div className="messageAuthor">
                <p>{msg.name}</p>
              </div>
            ) : null}
            <div className="messageContent">
              <p>{msg.msg}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatLog;
