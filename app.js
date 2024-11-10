require('dotenv').config();

const Routes = require('./routes.js');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

app.use(cors());
// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
Routes(app)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
