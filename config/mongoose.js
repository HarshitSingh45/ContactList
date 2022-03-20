const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts_list_db');
const db = mongoose.connection;

db.on('error',console.error.bind(console, 'error connecting to db'));
//  if up and running print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
})
 module.exports = db;