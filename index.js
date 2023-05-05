const express = require('express')
const app = express()
app.use(cors())

app.listen(4000, () => {
  console.log('Ready at http://localhost:4000')
})
