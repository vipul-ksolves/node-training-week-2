// import express from "express";
const express = require("express")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json('Server runing');
});

const router = require("./src/api/routes");

app.use("/blogs", router);

const PORT = 3333;
app.listen(PORT, () => {
	console.log(`Server is runnig post ${PORT}`);
});
