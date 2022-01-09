const express = require("express");
const path = require("path");
const app = express();

//getting the html
app.use("/public", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "official_homepage.html"));
});

app.listen(3002, () => console.log("listening at port 3002"));
