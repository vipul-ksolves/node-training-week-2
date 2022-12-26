import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

//middlewere
const mylogger = (req, res, next) => {
  console.log("Logged");
  next();
};

const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(mylogger);
app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<h2>Requested at: ${req.requestTime}</h2>`;
  res.send(responseText);
});

app.get("/home", function (req, res) {
  res.send("This is home page");
});

app.get("/dynamic", function (req, res) {
  res.render("dynamic", {
    name: "Ksolves Info",
    url: "http://www.ksolves.com",
  });
});

app.post("/post", (req, res) => {
  res.render("Data is posted");
});

app.listen(8000, () => {
  console.log("Server is runnig on port 8000");
});
