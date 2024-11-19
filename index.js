const express = require('express') 
const app = express() 
const mon = require('mongoose')
const db = require('./db-connect')

const port = 3000  

app.listen(port, ()=>{              
    console.log("server is open")
})