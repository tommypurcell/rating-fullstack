// Packages
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Database
async function connectToDB() {
  try {
    await mongoose.connect('INSERT MONGODB CONNECTION STRING')
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err)
  }
}

// Models

// Routes

// Server
app.listen(4000, () => {
  console.log('Ready at http://localhost:4000')
  connectToDB()
})
