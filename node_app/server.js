// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3009;

app.use(cors());
app.use(express.json());

app.post('/echo', (req, res) => {
    res.json({ status: 'success', message: req.body });
});

app.use((req, res) => {
    res.status(400).send('Undefined route.');
});

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});
