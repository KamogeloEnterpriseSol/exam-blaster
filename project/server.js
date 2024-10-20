// Import Express
const express = require('express');

// Create an Express app
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const questionRoutes = require('./questionRoutes');

// Create routes for question extraction and classification
app.use('/api/questions', questionRoutes);

// Create a route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to Question Extraction and Classification API!');
});

// Set up port
const PORT = 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});