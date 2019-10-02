import React from "react";

const OpenChats = ({ openChats }) => {
  const chats = openChats.map(openChat => <div>{openChat}</div>);
  return <div>Open chats! {chats}</div>;
};

export default OpenChats;
