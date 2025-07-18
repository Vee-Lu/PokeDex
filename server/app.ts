const express = require("express");

const app = express();
const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
    console.log(`Listening on localhost:${PORT}`)
})