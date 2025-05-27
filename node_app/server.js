// server.js

const express = require('express');
const cors = require('cors');

const app = express();
const port = 3009;

app.use(cors());
app.express(JSON);

app.listen(port, () => {
    console.log(`Running on http://localhost:`)
});
