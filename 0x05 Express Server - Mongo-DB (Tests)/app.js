const express = require('express');
const mongoose = require('mongoose')
const Blog = require('./models/blog')
//express app
const app = express();

//conect to mongodb & listen for requests
const dbURI = "mongodb+srv://yosefelsersy:yosefelsersy@cluster0.sblp7qr.mongodb.net/Node_blogs"
//listen for requests
mongoose.connect(dbURI, { useNewUrlParser : true , useUnifiedTopology : true}).then(result => app.listen(5000)).catch(err => console.log(err));
//register view engine
app.set('view engine','ejs');

//mongoose & mongo tests
app.get('/a-blog',(req, res) => {
    const blog = new Blog({
        title:'Yosef',
        snippet:'123 about my new blog',
        body:'more about my new blog'
    })
    blog.save()
    .then( result => {
        res.send('sent');
    })
    .catch(err => {
        console.log(err);
    });
});

app.get('/all-blog',(req,res) => {
        Blog.find()
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
})


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

