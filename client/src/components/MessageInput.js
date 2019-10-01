import React, { useState } from "react";

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        sendMessage(message);
      }}
    >
      <input
        placeholder="Enter message..."
        type="text"
        onChange={e => setMessage(e.target.value)}
      />
    </form>
  );
};

export default MessageInput;
