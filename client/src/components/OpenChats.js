import React from "react";

const OpenChats = ({ messages }) => {
  console.log("OPENCHATS MESSAGES", messages);
  if (!messages) return null;
  const openChats = Object.keys(messages);
  const chats = openChats.map(openChat => <div key={openChat}>{openChat}</div>);
  return (
    <div>
      <h3>Chats</h3> {chats}
    </div>
  );
};

export default OpenChats;
