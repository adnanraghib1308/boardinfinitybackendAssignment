const express = require('express')
const router = express.Router()
const Task = require("../models/task")

router.post('/', async (req, res) => {
	addNewTask(req, res)
})

async function addNewTask(req, res) {
    try{
		const task = new Task({
			taskName: req.body.taskName,
			taskDescription: req.body.taskDescription,
            creator: req.body.creator,
        })
        task.duration.expires = req.body.duration+'m';
        console.log(task.duration.expires);
        const savedTask = await task.save()
        res.json({
            msg: "Task Saved Succesfully",
            task: savedTask
        })
	}
	catch(err){
		res.json({msg:"Error has occured "+err})
	}
}

module.exports = router