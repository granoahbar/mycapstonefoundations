require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getFriends, deleteFriends, addEvents, displayEvents, deleteEvents} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.post('/seed', seed)
app.get('/friends', getFriends)
app.delete('/friends', deleteFriends)
app.post('/events', addEvents)
app.get('/events', displayEvents)
app.delete('/events', deleteEvents)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))