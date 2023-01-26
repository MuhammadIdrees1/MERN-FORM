const mongoose = require("mongoose");

const uri = "mongodb+srv://dbuser:dbpassword@cluster0.mxnatzz.mongodb.net/user_management_system?retryWrites=true&w=majority";

  
async function dataBase() {
  try {
    const x = await mongoose.connect(uri);
    console.log("CONNECTED !!");
  } catch (error) {
    console.log("ERROR: ", error);
  }
}
module.exports = {dataBase };