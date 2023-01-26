const express = require("express");
const { dataBase } = require("./db/config");
const app = express();
dataBase();
const cors = require('cors');
app.use(express.json());
app.use(cors());


// import routes
const userRoutes = require('./routes/user');

// route Middlewares

app.use('/api/user', userRoutes);

app.listen(4000, () => {
    console.log("Server listening at PORT: 4000");
  });