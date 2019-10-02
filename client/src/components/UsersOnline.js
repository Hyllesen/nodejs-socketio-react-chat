import React from "react";

const UsersOnline = ({ usersOnline }) => {
  console.log(usersOnline);
  return usersOnline.map(user => (
    <div key={user}>
      {user}
      <br />
    </div>
  ));
};

export default UsersOnline;
