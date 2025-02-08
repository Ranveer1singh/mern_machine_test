require('dotenv').config();
const express = require("express");
const http = require('http');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const morgan = require('morgan')

const db = require('./config/db')

// routes 
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes')


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())
app.use(morgan('dev')) // for logging http request and monitoring and debugging
app.use("/uploads", express.static("uploads"));

app.use('/api/auth',authRoutes)
app.use('/api/review',reviewRoutes)


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