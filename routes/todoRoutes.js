const express = require("express");
const todoRouter = express.Router();
const todoController = require("../controllers/todoController");

// get all todos
todoRouter.get("/getAllTodos", todoController.getAllTodos);

// add new todo
todoRouter.post("/addTodo", todoController.createTodo);

// update todo
todoRouter.put("/updateTodo/:id", todoController.updateTodo);

// remove todo
todoRouter.delete("/removeTodo/:id", todoController.deleteTodo);

// notify upon reaching date?

// automatically remove todo if todo set to completed but user did not delete it

module.exports = todoRouter;