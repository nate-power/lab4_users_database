const mongoose = require('mongoose');

const UserSchema = new mongoose.schema({

})

const User = mongoose.model("users", UserSchema);
module.exports = User;