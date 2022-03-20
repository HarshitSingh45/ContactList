const express = require('express');
const port = 8000;
const app =  express();
const path = require('path');
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var contactList = [
    {
        name: 'Harshit Singh',
        phone: 9999999999
    }
]
app.get('/',(req, res)=>{
    return res.render('home',{
        title: 'Contact-List',
        contactList: contactList
    });
})
app.post('/create', (req, res) => {
    console.log(req.body);
    contactList.push(req.body);
    return res.redirect('back');
});
app.get('/delete/', (req,res) => {
    let phone = req.query.phone;
    let contactIndex = contactList.findIndex(contact => contact.phone == phone);
    if(contactIndex!=-1){
        contactList.splice(contactIndex, 1);
    }
    return res.redirect('back');
})

app.listen(port, err =>{
    if(err){ console.log('error in running the server'); return}
    console.log(`server is up and running on port: ${port}`)
})