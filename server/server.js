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

io.on("connection", socket => {
  console.log("connection happened", socket.id);
  socket.on("user_join", username => {
    console.log("a user is joining the chat", username);
    people[socket.id] = username;
  });
  socket.on("message", msg => {
    console.log("a user is sending message", msg);
    io.emit("message", { from: people[socket.id], msg });
  });
});

io.on("disconnect", socket => {
  console.log("disconnect", socket.id);
});
