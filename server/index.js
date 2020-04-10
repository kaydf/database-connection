//file for our actual server
require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive');


const { SERVER_PORT, DATABASE_STRING } = process.env

massive(DATABASE_STRING)
    .then(db => {
        app.set('db', db)
        console.log('db is connected')
})
.catch(err => console.log(err));


app.listen(SERVER_PORT, () => {
    console.log(`server is eavesdroppping on ${SERVER_PORT}`)
})
