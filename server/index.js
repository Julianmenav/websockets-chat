require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const port = process.env.PORT || 3001;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    // origin: corsOrigin,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected to server.`);

  //Enter room
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`Usuario unido a sala ${data}`)
  });

  //When a message is sent by an user:
  socket.on("send_message", (data) => {
    console.log(`${socket.id} has sent a message.`);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected from server.`);
  });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
