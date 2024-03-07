const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todoItem: {
        required: true,
        type: String
    },
    dueDate: {
        required: true,
        type: Date
    },
    priority: {
        required: true,
        type: Number
    },
    isComplete: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model("Todo", todoSchema);