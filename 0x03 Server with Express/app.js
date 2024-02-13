const express = require('express');

// express app

const app = express();

// listen for requests

app.listen(3000);
console.log("listening to port 3000");

app.use(express.static('./public'))

app.get('/',(req,res)=>{


    res.sendFile('./public/index.html',{ root: __dirname});
});

app.get('/about',(req,res)=>{
    
    res.sendFile('./public/about.html',{ root: __dirname});
});

// redirects
app.get('/about-us',(req,res)=>{
    
    res.redirect('/about');
});

//404 page

app.use((req,res)=>{
    res.status(404).sendFile('./public/404.html',{ root: __dirname});
})