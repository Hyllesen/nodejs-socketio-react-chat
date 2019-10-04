import React, { useEffect, useState, useRef } from "react";
import UsernameInput from "./components/UsernameInput";
import MessageFeed from "./components/MessageFeed";
import MessageInput from "./components/MessageInput";
import UsersOnline from "./components/UsersOnline";
import PrivateChat from "./components/PrivateChat";
import OpenChats from "./components/OpenChats";
import io from "socket.io-client";

const App = () => {
  const socket = useRef(null);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState({});
  const [usersOnline, setUsersOnline] = useState([]);
  const [chatSelected, setChatSelected] = useState("");
  useEffect(() => {
    socket.current = io("http://localhost:3001");
    privateMessageHandler();
    return () => {
      socket.current.disconnect();
    };
  }, []);

  function privateMessageHandler() {
    socket.current.on("private-message", message => {
      const { from } = message;
      addNewMessagesToState(message, from);
    });
  }

  const sendPrivateMessage = message => {
    message.from = username;
    const { toUsername } = message;
    addNewMessagesToState(message, toUsername);
    socket.current.emit("private-message", message);
  };

  function addNewMessagesToState(message, username) {
    if (!messages[username]) {
      messages[username] = [];
    }
    messages[username].push(message);
    setMessages({ ...messages, [username]: messages[username] });
  }

  function usersOnlineHandler(username) {
    socket.current.on("users-online", currentUsers => {
      const index = currentUsers.indexOf(username);
      currentUsers.splice(index, 1);
      setUsersOnline(currentUsers);
    });
  }

  function submitUsername(username) {
    setUsername(username);
    socket.current.emit("user-join", username);
    usersOnlineHandler(username);
  }

  const privateChatWindow =
    chatSelected !== "" ? (
      <PrivateChat userSelected={chatSelected}>
        <MessageFeed messages={messages[chatSelected]} />
        <MessageInput
          sendMessage={sendPrivateMessage}
          toUsername={chatSelected}
        />
      </PrivateChat>
    ) : null;

  return (
    <div>
      <UsernameInput submitUsername={submitUsername} />
      <UsersOnline
        usersOnline={usersOnline}
        openPrivateChat={setChatSelected}
      />
      <OpenChats messages={messages} />
      {privateChatWindow}
    </div>
  );
};

export default App;
