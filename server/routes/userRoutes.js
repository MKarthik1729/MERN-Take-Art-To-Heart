const express = require("express");
const router = express.Router();
const userModel = require("../database/User");

router.post("/register", async (req, res) => {
  const user = new userModel(req.body);
  console.log(req.body);
  user
    .save()
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});
router.post("/login", (req, res) => {
  userModel
    .findOne({
      useremail: req.body.useremail,
    })
    .then((result) => {
      console.log(result);
      if (result.password === req.body.password) {
        res.send({
          data: result,
          msg: "Login Success",
        });
      } else {
        res.send({
          data: null,
          msg: "Login Failed, Please check your credentials again",
        });
      }
    });
});

module.exports = router;
