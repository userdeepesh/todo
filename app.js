const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Item = require('./models/items'); 

app.set('view engine', 'ejs');
const mongodb = 'mongodb+srv://simpli:simpli123@simpli.qt9xc8j.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongodb).then(() =>console.log('connected')).catch(err => console.log(err))

app.listen(3000);

app.get('/create-item',(req,res)=>{
    const item = new Item({
        name: 'cumputer',
         price: 2000
    });
 item.save().then(result => res.send(result)).catch(err =>
    console.log(err))
})

app.get('/create-items',(req,res)=>{
    
 Item.find().then(result => res.send(result)).catch(err =>
    console.log(err))
})

app.get('/get-item',(req,res)=>{
    
    Item.findById('659e58dad4106a4e31ac7b09').then(result => res.send(result)).catch(err =>
       console.log(err))
   })

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
