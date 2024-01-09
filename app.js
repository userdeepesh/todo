const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.set('view engine', 'ejs');
const mongodb = 'mongodb+srv://simpli:simpli123@simpli.qt9xc8j.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongodb).then(() =>console.log('connected')).catch(err => console.log(err))

app.listen(3000);

app.get('/', (req, res) => {
    const items = [
        {name: 'mobail', price: 1000},
        {name: 'book', price: 40},
        {name: 'computer', price: 2000}
    ]
    res.render('index', { items });
});

app.get('/add-item', (req, res) => {
    res.render('add-item');
});

app.use((req, res) => {
    res.render('error',);
});
