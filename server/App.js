const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require('./routes/userRoutes')
const connect = require("./database/mongoose").establishConnection;

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/user", userRouter);


connect(() => {
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
});
