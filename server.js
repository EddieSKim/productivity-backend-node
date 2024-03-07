require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const taskRouter = require("./routes/taskRoutes");
const todoRouter = require("./routes/todoRoutes");
app.use("/todos", todoRouter);
app.use("/tasks", taskRouter);

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;

database.on("error", (error) => console.error(error));
database.on("connected", () => console.log("Connected to database"));

const port = 3000;

app.listen(port, ()=> console.log("Server Started"));