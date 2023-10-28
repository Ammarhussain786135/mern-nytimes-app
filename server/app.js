const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Define your API key
const apiKey = process.env.API_KEY
// Allow specific origins
const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running!")
})

app.get('/api/top-stories', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${apiKey}`
        );
        res.json(response.data.results);
    } catch (error) {
        console.log("this is an error---------------", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
