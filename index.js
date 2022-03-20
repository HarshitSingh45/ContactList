const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const app =  express();
const path = require('path');
app.use(express.urlencoded());
const Contact =  require('./models/contactList');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var contactList = [
    {
        name: 'Harshit Singh',
        phone: 9999999999
    }
]
app.get('/',(req, res)=>{
    Contact.find({}, function(err, contacts){
        return res.render('home',{
            title: 'Contact-List',
            contactList: contacts
        });
    });
    
})
app.post('/create', (req, res) => {
    Contact.create(req.body, function(err, con){
        console.log(con);
    });
    return res.redirect('back');
});
app.get('/delete/', (req,res) => {
    let id = req.query.id;
    Contact.findByIdAndDelete(id, function(err){
        return res.redirect('back');
    })
    // let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    // if(contactIndex!=-1){
    //     contactList.splice(contactIndex, 1);
    // }
})

app.listen(port, err =>{
    if(err){ console.log('error in running the server'); return}
    console.log(`server is up and running on port: ${port}`)
})