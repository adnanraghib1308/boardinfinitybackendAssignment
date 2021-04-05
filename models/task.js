const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
	taskName: String,
	taskDescription: String, 
	creator: String,
	duration: {
        type: Date,
        default: Date.now
    },
	createdAt: {
        type: Date, 
        default: Date.now
    }
}, {timestamps: true})

module.exports = mongoose.model('Tasks', taskSchema)