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
    await mongoose.connect(
      'mongodb+srv://airbnbusername:airbnbpassword@airbnb.prh8sp9.mongodb.net/rating'
    )
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err)
  }
}

// Models
let Ratings = mongoose.model('ratings', {
  ratingNumber: {
    type: Number,
    required: true,
  },
})

// Routes
app.post('/ratings', async (req, res) => {
  try {
    let rating = await Ratings.create(req.body)
    res.send(rating)
  } catch (err) {
    res.send(err)
  }
})

// Server
app.listen(4000, () => {
  console.log('Ready at http://localhost:4000')
  connectToDB()
})
