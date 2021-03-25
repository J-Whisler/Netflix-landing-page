const express = require('express');
const app = express();
const port = 300;

app.get("/", (_, res) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})