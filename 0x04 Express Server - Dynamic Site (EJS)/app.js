const express = require('express');

//express app
const app = express();

//listen for requests
app.listen(5000);

//register view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    const blogs =[
        {title:'Yosef', text:'Hello iam Yosef'},
        {title:'Mohamed', text:'Hello iam Mohamed'},
        {title:'Ahmed', text:'Hello iam Ahmed'},
    ];
    res.render('index', {title:'Home',blogs})
});

app.get('/about',(req,res)=>{
    res.render('about',{ title:'About' })
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'})
});


// Error Page 404
app.use((req,res)=>{
    res.sendStatus(404).render('404',{ title :'404'});
});

