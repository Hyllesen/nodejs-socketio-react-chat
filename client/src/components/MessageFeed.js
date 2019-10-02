import React from "react";

const MessageFeed = ({ messages }) => {
  console.log(messages);
  if (messages) {
    return messages.map(message => (
      <div key={message.from + message.msg}>
        {message.from}: {message.msg}
      </div>
    ));
  }
  return <div></div>;
};

export default MessageFeed;
