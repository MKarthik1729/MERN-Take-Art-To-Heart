const mongoose = require("mongoose");

exports.establishConnection = (cb) => {
  mongoose
    .connect(process.env.Mongo_URL)
    .then((res) => {
      console.log(res);
      cb()
    })
    .catch((err) => {
      console.log(err);
    });
};
