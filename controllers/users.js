const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require ("../models/user.js");

//ROUTES
//I

//N
userRouter.get("/new", (req, res) => {
    res.render("./users/new.ejs");
})

//D

//U
userRouter.post("/", (req, res) => {
    //overwrite the user password with hashed password, then pass that in to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    User.create(req.body, (err, createdUser) => {
        res.redirect("/");
    });
});

//C

//E

//S

module.exports = userRouter;
