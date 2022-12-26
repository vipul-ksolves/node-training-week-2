import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", function (req, res) {
  res.render("home");
});

app.get("/dynamic", function (req, res) {
  res.render("dynamic", {
    name: "Ksolves Info",
    url: "http://www.ksolves.com",
  });
});

app.listen(8000);
