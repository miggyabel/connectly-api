const express = require('express');
const app = express();

app.use(express.json());

// Sample Route for Connectly API
app.get('/', (req, res) => {
    res.send('Connectly API is Running...');
});

// Part 2: Build the API - Get all posts
app.get('/api/posts', (req, res) => {
    res.json([
        { id: 1, user: "User1", content: "My first post on Connectly" },
        { id: 2, user: "User2", content: "Integrative Programming is fun!" }
    ]);
});

module.exports = app;
