const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Item = require('./models/items');

app.set('view engine', 'ejs');
const mongodb = 'mongodb+srv://simpli:simpli123@simpli.qt9xc8j.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongodb).then(() => console.log('connected')).catch(err => console.log(err))

app.listen(3000);







app.get('/', (req, res) => {
    
    res.redirect('get-items');
});
app.get('/get-items', (req, res) => {

    Item.find().then(result => {
        
        res.render('index', { items: result });
    }).catch(err =>
        console.log(err))
})

app.get('/add-item', (req, res) => {
    res.render('add-item');
});

app.use((req, res) => {
    res.render('error',);
});
