const express = require('express');
const app = express();
app.use(express.json());

// --- DESIGN PATTERN: SINGLETON ---
// Sinisiguro nito na iisang instance lang ng Database ang tumatakbo sa buong app.
const Database = (function () {
    let instance;
    function createInstance() {
        return { 
            name: "Connectly_Secure_DB", 
            status: "Connected", 
            version: "2.0 (Enhanced)" 
        };
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// --- SECURITY ENHANCEMENT: API KEY AUTHENTICATION ---
// Middleware: Haharangin nito ang request kung walang tamang API Key sa header.
const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === 'admin123') {
        next(); // Authorization successful
    } else {
        res.status(401).json({ error: "Unauthorized: Please provide a valid API Key." });
    }
};

// GET Route: Protected by Security and using Singleton Pattern
app.get('/api/posts', authenticate, (req, res) => {
    const db = Database.getInstance(); 
    res.json({
        status: "Success",
        message: "You have accessed secure data.",
        database: db,
        data: [
            { id: 101, title: "Security Update", content: "Auth Middleware is active." },
            { id: 102, title: "Design Pattern", content: "Singleton Instance is running." }
        ]
    });
});

module.exports = app;
