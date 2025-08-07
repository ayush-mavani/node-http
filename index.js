const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.all("/", (req, res) => {
  res.send("server is running");
});

// Create HTTP Server
const server = http.createServer(app);

// Start Server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
