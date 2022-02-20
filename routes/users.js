const express = require('express');
const User = require('../models/User');
const app = express();

app.post('/users', async (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "User fields cannot be empty."
        });
    };
    try {
       const user = new User(req.body);
       await user.save()
       return res.status(200).send("User saved!\n" + user);
    }
    catch (err) {
        res.status(500).send(err);
    }
})

module.exports = app