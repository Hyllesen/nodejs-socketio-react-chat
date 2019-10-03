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
  const forceUpdate = useForceUpdate();

  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState({});
  const [usersOnline, setUsersOnline] = useState([]);
  const [chatSelected, setChatSelected] = useState("");
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
      console.log("WE GOT A PRIVATE MESSAGE", message);
      debugger;
      const currentMessages = messages;
      if (!currentMessages.hasOwnProperty(message.from)) {
        currentMessages[message.from] = [];
      }
      currentMessages[message.from].push(message);
      setMessages(msg => currentMessages);
    });
  }

  function usersOnlineHandler() {
    socket.current.on("users-online", currentUsers => {
      setUsersOnline(currentUsers);
    });
  }

  function submitUsername(username) {
    socket.current.emit("user-join", username);
    setUsername(() => username);
  }

  function sendPrivateMessage(message) {
    message.from = username;
    const { toUsername } = message;
    let currentMessages = messages[toUsername];
    if (!currentMessages) {
      currentMessages = [];
    }
    currentMessages.push(message);
    setMessages({ ...messages, [toUsername]: currentMessages });
    socket.current.emit("private-message", message);
  }

  function openPrivateChat(username) {
    setChatSelected(username);
  }

  //create your forceUpdate hook
  function useForceUpdate() {
    const [value, set] = useState(true); //boolean state
    return () => set(value => !value); // toggle the state to force render
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

  console.log("messages, render", messages);

  return (
    <div>
      <UsernameInput submitUsername={submitUsername} />
      <UsersOnline
        usersOnline={usersOnline}
        openPrivateChat={openPrivateChat}
      />
      <OpenChats messages={messages} />
      {privateChatWindow}
      {/*Clicking on the button will force to re-render like force update does */}
      <button onClick={forceUpdate}>Click to re-render</button>
    </div>
  );
};

export default App;
