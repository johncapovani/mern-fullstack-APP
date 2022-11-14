const express = require('express')
//Colors is  used to add colors to terminal
const colors = require('colors')
const router = require('./routes/goalsRoutes')
const dotenv = require('dotenv').config()

//Bring in errorHandler
const { errorHandler } = require('./middleware/errorMiddleware')
//Connect to mongoDB
const connectDB = require('./config/db')

const port = process.env.PORT || 5000

connectDB()

const app = express()

//Add middleware these are the actions to take prior to the request being routed
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Setting up routes to controllers

app.use('/api/goals', require('./routes/goalsRoutes'))

//Set the app to use our errorHandler
app.use(errorHandler)

app.listen(port, () => console.log(`We are running on port ${port}`))

