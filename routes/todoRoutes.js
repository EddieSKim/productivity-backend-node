const express = require("express");
const todoRouter = express.Router();

// get all todos
todoRouter.get("/todos", );

// add new todo
todoRouter.post("/todos/addTodo", );

// remove todo
todoRouter.delete("/todos/removeTodo", );

// notify upon reaching date?

// automatically remove todo if todo set to completed but user did not delete it

module.exports = todoRouter;