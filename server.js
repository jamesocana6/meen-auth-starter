const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log("Server is connected on port " + PORT);
});