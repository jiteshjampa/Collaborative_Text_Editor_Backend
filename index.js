require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const documentRoutes = require("./Routes/TextEditorRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("API running"));
connectDB();
app.use("/api/docs", documentRoutes);

const activeUsers = {}; // Tracks active users per document

io.on("connection", (socket) => {
  console.log("🟢 A user connected:", socket.id);

  let currentUser = null;
  let currentDocId = null;

  // User joins a document
  socket.on("join-doc", ({ docId, username }) => {
    if (!username || !docId) return;

    socket.join(docId);
    currentUser = username;
    currentDocId = docId;

    if (!activeUsers[docId]) {
      activeUsers[docId] = new Set();
    }
    activeUsers[docId].add(username);

    console.log(`🟢 ${username} joined document ${docId}`);
    io.to(docId).emit("update-users", Array.from(activeUsers[docId]));
  });

  // Handle real-time document updates
  socket.on("update-doc", ({ docId, content }) => {
    socket.to(docId).emit("receive-update", content);
  });

  // Remove user when they leave the document
  const removeUser = () => {
    if (currentDocId && currentUser && activeUsers[currentDocId]) {
      activeUsers[currentDocId].delete(currentUser);
      io.to(currentDocId).emit(
        "update-users",
        Array.from(activeUsers[currentDocId])
      );

      console.log(`🔴 ${currentUser} left document ${currentDocId}`);
    }
  };

  socket.on("leave-doc", removeUser);

  socket.on("disconnect", () => {
    console.log("🔴 A user disconnected:", socket.id);
    removeUser();
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
