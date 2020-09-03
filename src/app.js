const express = require("express");
const morgan = require("morgan");

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use("/tasks", require("./routes/tasks.routes"));

//Export app
module.exports = app;