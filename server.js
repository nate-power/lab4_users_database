const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const mongoCode = require("./keys").mongoCode;

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(mongoCode, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});

app.use(userRouter);

app.listen(3000, () => { console.log('Server is running...') });