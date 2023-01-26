const Users = require("../models/Users");
// Add New User
const user_create = async (req, res) => {
   try { 
    const users = new Users({
      username: req.body.username,
      email: req.body.email,
      message: req.body.message,
    });
      const user = await users.save();
      res.send(user);
    } catch (error) {
      res.json({ message: error });
    }
  };
  // Get All User
  const user_all = async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (error) {
      res.json({ message: error });
    }
  };

  module.exports = {
    user_all,
    user_create,
  };