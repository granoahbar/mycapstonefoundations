app.post('/seed', seed)

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {} = require('./controller.js')

app.use(express.json())
app.use(cors())