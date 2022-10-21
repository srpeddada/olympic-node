const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
// const flash = require("connect-flash");
// const session = require("express-session");

app.use(bodyParser.json());
var port = process.env.PORT || 443;


app.use(cors());
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(
  // "mongodb+srv://tranquilwave:Srinivas2@cluster0.hcjki.gcp.mongodb.net/revuesmart?retryWrites=true&w=majority"
  "mongodb+srv://srpeddada:Srinivas2@cluster0.tbypt.gcp.mongodb.net/olympic?retryWrites=true&w=majority"
);
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("connected to db");
});


//EJS are below
app.use(expressLayouts);
app.set("view engine", "ejs");
//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
//express session
// app.use(
//   session({
//     secret: "secret",
//     resave: true,
//     saveUninitialized: true,
//   })
// );
// app.use(flash());
//global vars
//routes are below

app.use("/", require("./routes/index.js"));
app.use("/users", require("./routes/users.js"));
const server = app.listen(port, () =>
  console.log("server started on port 443")
);
module.exports.server = server;
