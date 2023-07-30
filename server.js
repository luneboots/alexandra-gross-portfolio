const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
require('dotenv').config();


// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve your standalone HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
