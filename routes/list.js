const express = require('express')
const router = express.Router()
const Task = require("../models/task")

router.get('/', async (req, res) => {
	await Task.find((err, docs) => {
		if(!err){
			res.json({
                response: docs
            })
		}
		else{
			console.log('Error: ' + err)
			res.send(err)
		}
    })
})

module.exports = router