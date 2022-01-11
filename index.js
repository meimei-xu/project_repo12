const express = require("express");
const path = require("path");
const app = express();

app.set("view-engine", "ejs");
//getting the sign up page html
// app.use("/public", express.static(path.join(__dirname, "public")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "userlogin", "signup.html"));
// });
app.get("/", (req, res) => {
  res.render("index.ejs", { name: "ally" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.listen(3002, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("listening at port 3002");
});

//actions on the server side code
//api = application programming interface. api for client to send data to me
//function has two arguments, request & response
//request: holds all data being sent
//response: sending things back to the client

app.post("/api", (req, res) => {
  console.log("hello");
  console.log(req.body);
});
