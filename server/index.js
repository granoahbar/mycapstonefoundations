require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getFriends, deleteFriend, addEvents, displayEvents, deleteEvent, getFriend, getFriendInfo, addFriends, getFriendNotes} = require('./controller.js')

app.use(express.json())
app.use(cors())

//////////////////////////////////////////////////////////////////////////////

app.post('/seed', seed)
app.get('/events/:id', getFriendInfo)
app.get('/friend/:id', getFriendNotes)
app.get('/friends/:id', getFriend)
app.get('/friends', getFriends)
app.delete('/friend/:id', deleteFriend)
app.post('/events', addEvents)
app.post('/friends', addFriends)
app.get('/events', displayEvents)
app.delete('/event/:id', deleteEvent)

/////////////////////////////////////////////////////////////////////////////

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))