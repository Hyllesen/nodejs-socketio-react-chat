import React from "react";
import { ChatFeed, Message } from "react-chat-ui";

const MessageFeed = ({ messages, username }) => {
  console.log(messages);
  if (messages) {
    messages = messages.map(
      message =>
        new Message({
          id: message.from === username ? 0 : 1,
          senderName: message.from,
          message: message.message
        })
    );
    return <ChatFeed showSenderName messages={messages} />;
  }
  return <div></div>;
};

export default MessageFeed;
