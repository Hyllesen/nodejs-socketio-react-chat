import React, { useState } from "react";

const UsernameInput = ({ submitUsername }) => {
  const [username, setUsername] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        submitUsername(username);
      }}
    >
      <label>Username</label>
      <br />
      <input type="text" onChange={e => setUsername(e.target.value)} />
    </form>
  );
};

export default UsernameInput;
