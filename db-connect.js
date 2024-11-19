const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017' 
mongoose.connect(mongoURL)
const db = mongoose.connection 
db.on('connected',()=>{console.log('MongoDB is connected')})
db.on('error',()=>{console.log('MongoDB connection errOR')})
db.on('disconnected',()=>{console.log('MongoDB is didconnected')})
module.exports = db

