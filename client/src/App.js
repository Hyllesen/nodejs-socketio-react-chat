import React, { useEffect, useState, useRef } from "react";
import UsernameInput from "./components/UsernameInput";
import MessageFeed from "./components/MessageFeed";
import MessageInput from "./components/MessageInput";
import UsersOnline from "./components/UsersOnline";
import io from "socket.io-client";

const App = () => {
  const socket = useRef(null);
  const [messages, setMessages] = useState([]);
  const [usersOnline, setUsersOnline] = useState([]);
  useEffect(() => {
    socket.current = io("http://localhost:3001");
    messageEventHandler();
    usersOnlineEventHandler();
    return () => {
      socket.current.disconnect();
    };
  }, []);

  function messageEventHandler() {
    socket.current.on("message", message => {
      setMessages(messages => [...messages, message]);
    });
  }

  function usersOnlineEventHandler() {
    socket.current.on("users_online", currentUsers => {
      setUsersOnline(currentUsers);
    });
  }

  function submitUsername(username) {
    socket.current.emit("user_join", username);
  }

  function sendMessage(message) {
    socket.current.emit("message", message);
  }

  return (
    <div>
      <UsernameInput submitUsername={submitUsername} />
      <MessageFeed messages={messages} />
      <MessageInput sendMessage={sendMessage} />
      <UsersOnline usersOnline={usersOnline} />
    </div>
  );
};

export default App;
