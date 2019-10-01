import React from "react";

const MessageFeed = ({ messages }) => {
  return messages.map(message => (
    <div>
      {message.from}: {message.msg}
    </div>
  ));
};

export default MessageFeed;
