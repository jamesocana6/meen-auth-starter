const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require ("../models/user.js");

//ROUTES
//I

//N

//D

//U
userRouter.post("/", (req, res) => {
    //overwrite the user password with hashed password, then pass that in to our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    res.send(req.body);
});

//C

//E

//S

module.exports = userRouter;
