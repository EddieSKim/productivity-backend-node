const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskCategory: {
        required: true,
        type: String
    },
    taskDescription: {
        required: false,
        type: String
    },
    hoursSpent: {
        required: true,
        type: Number
    },
    createdDate: {
        required: true,
        type: Date
    }
})

module.exports = mongoose.model("Task", taskSchema);