const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const PORT = 3000;
const HOST = "0.0.0.0"; // required for ECS / Docker networking

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.all("/", (req, res) => {
  res.send("🚀 Welcome to the Node.js HTTP Server!");
});

app.get("/health-check", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running smoothly!",
  });
});

// Create HTTP Server
const server = http.createServer(app);

// Start Server
server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
