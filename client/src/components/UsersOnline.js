import React from "react";

const UsersOnline = ({ usersOnline, openPrivateChat }) => {
  console.log(usersOnline);
  return usersOnline.map(username => (
    <div key={username}>
      <button onClick={() => openPrivateChat(username)}>{username}</button>
      <br />
    </div>
  ));
};

export default UsersOnline;
