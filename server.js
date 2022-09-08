const express = require("express");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;
const methodOverride = require("method-override");
const session = require("express-session");
const mongoose = require("mongoose");
const usersController = require("./controllers/users.js");
const sessionsController = require("./controllers/sessions.js");

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//MIDDLEWARE 
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use("/users", usersController);
app.use("/sessions", sessionsController);

//ROUTES
app.get("/", (req, res) => {
    res.redirect("/users");
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, (req, res) => {
    console.log("Server is connected on port " + PORT);
});