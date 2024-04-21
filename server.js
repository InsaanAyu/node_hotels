const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('! Wellcome TO My Hotel Shraddha Palace !')
})





//Import the router

const personroutes = require('./routes/personroutes');

const menuItemRoutes = require('./routes/menuItemRoutes');


//use the routers files

app.use('/person', personroutes);
app.use('/menu', menuItemRoutes);


app.listen(3000, ()=>{
    console.log('server teri sun raa h bhaii chinta mt kr bss pdhai kr');
})