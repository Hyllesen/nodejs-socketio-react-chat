import React from "react";

const PrivateChat = ({ userSelected, children }) => {
  return (
    <div>
      Chat with {userSelected}
      {children}
    </div>
  );
};

export default PrivateChat;
