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
const usernames = [];

io.on("connection", socket => {
  console.log("connection happened", socket.id);
  socket.on("user_join", username => {
    console.log("a user is joining the chat", username);
    people[socket.id] = username;
    usernames.push(username);
    io.emit("users_online", usernames);
  });
  socket.on("message", msg => {
    console.log("a user is sending message", msg);
    io.emit("message", { from: people[socket.id], msg });
  });
  socket.on("disconnect", () => {
    const username = people[socket.id];
    const index = usernames.indexOf(username);
    usernames.splice(index, 1);
    delete people[socket.id];
    console.log("disconnect", socket.id);
    io.emit("users_online", usernames);
  });
});
