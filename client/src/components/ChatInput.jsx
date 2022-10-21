import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ChatInput = ({ message, handleKeyDown, sendMessage, handleOnChange }) => {
  return (
    <div id="sendMessageFooter">
      <input
        className="inputMessage"
        onKeyDown={handleKeyDown}
        onChange={handleOnChange}
        placeholder="Message to send..."
        value={message}
      />
      <span className="sendMessageButton" onClick={sendMessage}>
        <BsFillArrowUpCircleFill />
      </span>
    </div>
  );
};

export default ChatInput;
