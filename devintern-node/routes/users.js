//Author = Srinivas Peddada

const express = require("express");
const router = express.Router();
const exp = require("../app");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
var fs = require("fs");
var ejs = require("ejs");
const data = require("../models/data");


app.use(bodyParser.json());
app.use(cors());




router.post('/postData', (req, res) => {
  console.log(req.body)
  const date = req.body.Date
  const open = req.body.Open
  const high = req.body.High
  const low = req.body.Low
  const close = req.body.Close
  const adj_close = req.body.AdjClose
  const volume = req.body.Volume

  const newUser = new data({
        date,
        open,
    high,
    low,
    close,
    adj_close,
    volume 
      });
      newUser
        .save()
        .then((user) => {
          console.log(newUser, "new user");
          var data = {
            status: "success",
            id: newUser._id
          }
          res.send(data)
        })
        .catch((err) => console.log(err));
})

router.post('/getData', (req, res) => { 

  console.log(req.body.id)
  
  data.find({ _id: req.body.id }).exec(function (err, data) {
    if (err) {
      return callback(err);
    }
    if (data.length == 0) {
      res.sendStatus(400)
     // res.send("error")
    }
    else {
      res.send(data)
    }

  })
})





module.exports = router;
