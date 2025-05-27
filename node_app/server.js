// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3009;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server up and running..');
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
