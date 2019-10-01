import React from "react";

const UsersOnline = ({ usersOnline }) => {
  console.log(usersOnline);
  return usersOnline.map(user => (
    <div>
      {user}
      <br />
    </div>
  ));
};

export default UsersOnline;
