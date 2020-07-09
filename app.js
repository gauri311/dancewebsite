const path=require("path");
const express = require('express');

const app = express();
// getting-started.js
const mongoose = require('mongoose');
const bodyparser=require("body-parser");
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const port=80;
const ContactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    text: String,
    desc: String,
    adderes: String
    

  });
  const Contact = mongoose.model('Contact', ContactSchema);




// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"

    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res)=>{
    var mydata = new Contact(req.body);
    mydata.save().then(()=>{
        res.send("this item has been saved to the database")
    }).catch(()=>{
        res.status(400).send("item was not saved to the database");
    })
    //  res.status(200).render('contact.pug');

})
// / START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})