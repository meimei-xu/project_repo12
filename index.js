const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcrypt");

const users = [];

app.set("view-engine", "ejs");
app.use(express.urlencoded({ extended: false }));

//getting the static files
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public"));
});

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "ally" });
});

//login get and post
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login", (req, res) => {});

//signup get and post
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
app.post("/signup", async (req, res) => {
  try {
    const pass = await bcrypt.hash(req.body.pw, 10);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      password: pass,
      email: req.body.mail,
    });
    res.redirect("/login");
  } catch {
    res.redirect("/register");
  }
  console.log(users);
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
