const express = require('express')
const mongoose = require('mongoose')
const listRouter = require('./routes/list')
const addRouter = require('./routes/add')
require('dotenv/config');

const app = express()
const PORT = 4000 || process.env.PORT

mongoose.connect(
	process.env.DB_URL, 
	{ 
		useNewUrlParser: true, 
		useUnifiedTopology: true 
	}, 
	() => {
	console.log('connected to database')
})

app.get('/', (req, res) => {
    res.send("Index page works fine")
})

app.use(express.json())
app.use('/list', listRouter);
app.use('/add', addRouter);

app.listen(PORT, () => {
    console.log("App running at port: ", PORT);
})