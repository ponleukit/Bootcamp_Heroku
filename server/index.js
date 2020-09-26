const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = new express();

// middleware

const tasklist = require('./routes/api/taskslist');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/taskslist', tasklist);

// Handle the env

if(process.env.NODE_ENV === "production"){
    app.use(express.static(__dirname + 'public'))

    //handle spa
    app.get(/.*/, (req,res)=>  res.sendFile(__dirname + '/public/index.html'));
}
const port = process.env.PORT || 5000; 
app.listen(port, ()=> console.log(`Server start on port: ${port}`))
