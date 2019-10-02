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
  const [openChats, setOpenChats] = useState([]);
  useEffect(() => {
    socket.current = io("http://localhost:3001");
    privateMessageHandler();
    usersOnlineHandler();
    return () => {
      socket.current.disconnect();
    };
  }, []);

  function privateMessageHandler() {
    socket.current.on("private-message", message => {
      console.log(message);
      if (!messages.hasOwnProperty(message.from)) {
        messages[message.from] = [];
      }
      messages[message.from].push(message);
      console.log(messages);
      setMessages(currentMessages => messages);
      if (openChats.indexOf(message.from) === -1) {
        setOpenChats(openChats => [...openChats, message.from]);
      }
    });
  }

  function usersOnlineHandler() {
    socket.current.on("users-online", currentUsers => {
      setUsersOnline(currentUsers);
    });
  }

  function submitUsername(username) {
    socket.current.emit("user-join", username);
    setUsername(username);
  }

  function sendPrivateMessage(message) {
    console.log(message);
    if (!messages.hasOwnProperty(message.from)) {
      messages[message.from] = [];
    }
    socket.current.emit("private-message", message);
  }

  function openPrivateChat(username) {
    setChatSelected(username);
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
        openPrivateChat={openPrivateChat}
      />
      <OpenChats openChats={openChats} />
      {privateChatWindow}
    </div>
  );
};

export default App;
