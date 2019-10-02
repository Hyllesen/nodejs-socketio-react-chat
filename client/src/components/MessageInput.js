import React, { useState } from "react";

const MessageInput = ({ sendMessage, toUsername }) => {
  const [message, setMessage] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        console.log(message, toUsername);
        sendMessage({ message, toUsername });
        setMessage("");
      }}
    >
      <input
        placeholder="Enter message..."
        type="text"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
    </form>
  );
};

export default MessageInput;
