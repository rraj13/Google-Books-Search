const express = require('express');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
const routes = require('./controllers/booksController.js');
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');

// Start the API server
app.listen(PORT, function() {
  console.log(`App running on port ${PORT}!`);
});
