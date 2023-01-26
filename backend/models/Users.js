const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
  
});

const Users = mongoose.model("users", UsersSchema);

module.exports = Users;