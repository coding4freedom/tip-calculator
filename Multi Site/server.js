// http://localhost:3000
// http://localhost:3000/about.html
// server.js app declaration
const express = require('express');    // Import the Express framework
const app = express();                  // Create an Express application
const PORT = process.env.PORT || 3000;  // Define the port (default to 3000)

// server static file
app.use(express.static('public'));

// Define route handlers for each site page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/about.html', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
});

app.get('/contact.html', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});