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

 ///////////////////////////////////////////////////////////////////////////

 module.exports = {
    seed: (req, res) => {
        sequelize.query(`

        create table friends (
            friend_id serial primary key,
            first_name varchar(150),
            last_name varchar(150),
            notes text
        );
       
        create table events (
            event_id serial primary key,
            friend_id integer references friends(friend_id),
            event_name varchar(50),
            event_date date,
            event_time time
        );
    
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}
 
 