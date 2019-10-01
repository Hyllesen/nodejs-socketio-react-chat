import React from "react";

const MessageFeed = ({ messages }) => {
  return messages.map(message => (
    <div>
      {/* {message.from}: {message.message} */}
      {message}
    </div>
  ));
};

export default MessageFeed;
