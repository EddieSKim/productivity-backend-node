const todoModel = require("../models/todoModel");

module.exports = {
    getAllTodos: async (req, res) => {
        try {
            const data = await todoModel.find();
            res.json(data);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    },

    createTodo: async (req, res) => {
        const data = new todoModel({
            todoItem: req.body.todoItem,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
            isComplete: false,
        });

        try {
            const dataToSave = await data.save();
            res.status(200).json(dataToSave);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // update todo isComplete
    updateTodo: async (req, res) => {
        const todoId = req.params.id;

        try {

        } catch(error) {

        }
    },

    deleteTodo: async (req, res) => {
        const todoId = req.params.id;

        try {

        } catch(error) {
            
        }
    }
}