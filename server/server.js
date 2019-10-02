const server = require("http").createServer();

const io = require("socket.io")(server, {
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

server.listen(3001);

const people = {};
const sockets = {};
const usernames = [];

io.on("connection", socket => {
  console.log("connection happened", socket.id);
  socket.on("user-join", username => {
    console.log("a user is joining the chat", username);
    people[socket.id] = username;
    sockets[username] = socket;
    usernames.push(username);
    io.emit("users-online", usernames);
  });
  socket.on("private-message", ({ message, toUsername }) => {
    console.log("private message");
    console.log(message, toUsername);
    const receivingSocketId = sockets[toUsername].id;
    io.sockets.sockets[receivingSocketId].emit("private-message", {
      from: people[socket.id],
      message
    });
  });
  socket.on("disconnect", () => {
    const username = people[socket.id];
    const index = usernames.indexOf(username);
    usernames.splice(index, 1);
    delete people[socket.id];
    console.log("disconnect", socket.id);
    io.emit("users-online", usernames);
  });
});
