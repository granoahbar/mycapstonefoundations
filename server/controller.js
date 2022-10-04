require('dotenv').config()
 
const {CONNECTION_STRING} = process.env;
 
const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(CONNECTION_STRING, {
   dialect: 'postgres', 
   dialectOptions: {
       ssl: {
           rejectUnauthorized: false
       },
        multipleStatements: true
   }
});

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
    deleteFriend: (req,res) => {
        sequelize.query(`DELETE FROM events WHERE friend_id = ${req.params.id}`)
        .then(()=>sequelize.query(`DELETE FROM friends WHERE friend_id = ${req.params.id}`))
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    }
    ,
    addEvents: (req,res) => {
        const {friend_id, event_name, event_date} = req.body;

        sequelize.query(`INSERT INTO events (friend_id, event_name, event_date)
        VALUES (${friend_id}, '${event_name}', '${event_date}')
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    addFriends: (req,res) => {
        const {first_name, last_name, notes} = req.body;

        sequelize.query(`INSERT INTO friends (first_name, last_name, notes)
        VALUES ('${first_name}', '${last_name}', '${notes}')
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
    deleteEvent: (req,res) => {
        sequelize.query(`DELETE FROM events WHERE friend_id = ${req.params.id} AND event_id = ${req.params.event_id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    getFriendInfo: (req,res) => {
        sequelize.query(`SELECT event_name, event_date FROM events WHERE friend_id = ${req.params.id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
    ,
    getFriendNotes: (req,res) => {
        sequelize.query(`SELECT notes FROM friends WHERE friend_id = ${req.params.id}`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log)
    }
 }
 