const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
app.use(bodyParser.json())

async function connectToDB() {
  try {
    await mongoose.connect('INSERT MONGODB CONNECTION STRING')
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err)
  }
}

app.listen(4000, () => {
  console.log('Ready at http://localhost:4000')
  connectToDB()
})
