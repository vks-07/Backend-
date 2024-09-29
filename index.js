require("dotenv").config();
const express = require('express');
const app = express();
const port = 3000
app.get('/', (req, res) => {
    res.send('Welcome to the server');
})

app.get('/twitter',(req, res) => {
    res.send('Welcome to the twitter server');
})

// not hot reloading -> use nodemon for live reload
app.get('/login',(req,res)=>{
    res.send('Welcome to the login server ');
})

app.get('/yt', (req,res)=>{
    res.send('Welcome to the chai or code');
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`);
    
})