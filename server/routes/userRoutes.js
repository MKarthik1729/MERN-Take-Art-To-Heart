const express = require("express");
const router = express.Router();
const userModel = require("../database/User");

router.post("/register", async (req, res) => {
  userModel
    .create(req.body)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("Error");
      console.log(err);
    });
});
router.post("/login", (req, res) => {
  userModel
    .findOne({
      useremail: req.body.useremail,
    })
    .then((result) => {
      console.log(result);
      res.send(result);
    });
});



module.exports = router;
