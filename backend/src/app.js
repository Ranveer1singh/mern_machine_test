const express = require("express");
const http = require('http');

const db = require('./config/db')
require('dotenv').config();




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.connect()
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Start server
server.listen(PORT, (err) => {
    if (err) {
      console.error('Failed to start server:', err);
    } else {
      console.log(`Server running at http://localhost:${PORT}/`);
    }
  });

// Handle server errors
server.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    switch (error.code) {
      case 'EACCES':
        console.error(`Port ${PORT} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`Port ${PORT} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  });