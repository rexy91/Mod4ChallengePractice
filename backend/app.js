const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express();

// Import routes
const planteesRouter = require('./routes/plantees')
app.use('/plantees', planteesRouter)

app.use(cors())
app.use(bodyParser.json())

app.listen(3000, ()=> console.log('server started') )



mongoose.connect('mongodb://localhost/mod4challengeRedoDatabase')
const DB = mongoose.connection
DB.once('open', () => console.log('connected to database'))
DB.on('error', (error)=> console.error(error))


