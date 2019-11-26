const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const excercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')


require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

app.use('/excercises', excercisesRouter)
app.use('/users', usersRouter)


const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongoose connection successfully established");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
