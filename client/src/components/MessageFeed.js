import React from "react";

const MessageFeed = ({ messages }) => {
  return messages.map(message => (
    <div key={message.from + message.msg}>
      {message.from}: {message.msg}
    </div>
  ));
};

export default MessageFeed;
