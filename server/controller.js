require('dotenv').config()
 
const {CONNECTION_STRING} = process.env;
 
const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(CONNECTION_STRING, {
   dialect: 'postgres',
   dialectOptions: {
       ssl: {
           rejectUnauthorized: false
       }
   }
})

///////////////////////////////////////////////////////////////////////////////

module.exports = {
    getFriend: (req,res) => {
        sequelize.query(`SELECT * FROM friends WHERE friend_id = ${req.params.id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    getFriends: (req,res) => {
        sequelize.query('SELECT * FROM friends ORDER BY friend_id DESC')
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    deleteFriends: (req,res) => {
        sequelize.query(`DELETE FROM friends WHERE friend_id = ${req.body.friend_id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    addEvents: (req,res) => {
        const {name, date, time} = req.body

        sequelize.query(`INSERT INTO events (event_name, friend_id, event_date, event_time)
        VALUES ('${event_name}', ${friend_Id}, '${event_date}', '${event_time}';,)
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    addFriends: (req,res) => {
        const {first_name, last_name, notes} = req.body

        sequelize.query(`INSERT INTO friends (first_name, last,name, notes)
        VALUES ('${first_name}, '${last_name}', '${notes}';,)
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    displayEvents: (req,res) => {
        sequelize.query('SELECT * FROM events ORDER BY event_date DESC')
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    deleteEvents: (req,res) => {
        sequelize.query(`DELETE FROM friends WHERE event_id = ${req.body.event_id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    getFriendInfo: (req,res) => {
        sequelize.query(`SELECT event_name, event_date, event_time FROM events WHERE friend_id = ${req.params.id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    getFriendNotes: (req,res) => {
        sequelize.query(`SELECT friend_notes  FROM friends WHERE friend_id = ${req.params.id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
 }
 