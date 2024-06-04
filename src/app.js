const express = require('express')
const logRoutes = require('./routes/logRoutes')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', logRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
