const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const listingroutes = require("./listingroutes.js");
const wrapAsync = require("../utlis/wrapAsync.js");
const ExpressError = require("../utlis/ExpressError.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware")
const user = require("../controllers/user.js");

//Signup Route
//Get Route
//Post Route
router.route("/signup")
    .get( (req, res) => {
        res.render('./users/signup.ejs');
    })
    .post( wrapAsync(user.signup));

//Login Route
//Get Route
//Post Route
router.route("/login")
    .get( wrapAsync(user.loginget))
    .post( saveRedirectUrl,
        passport.authenticate('local', { failureRedirect: '/login', failureFlash: true}),
        wrapAsync(user.loginpost));

//Logout Route
//Get Route
router.get('/logout', wrapAsync(user.logout))

module.exports = router;