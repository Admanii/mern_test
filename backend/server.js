const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb+srv://admani:283790@cluster0.psomssl.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }, (e) =>
  console.log('MongoDB Connected')
);
//connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log('Server started on port: ' + port))
