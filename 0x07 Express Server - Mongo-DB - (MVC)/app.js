const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoutes');
//express app
const app = express();

//conect to mongodb & listen for requests
const dbURI = "mongodb+srv://yosefelsersy:yosefelsersy@cluster0.sblp7qr.mongodb.net/Node_blogs?retrywrites=true&w=majority"
//listen for requests
mongoose.connect(dbURI, { useNewUrlParser : true , useUnifiedTopology : true})
    .then(result => app.listen(5000))
    .catch(err => console.log(err));
//register view engine
app.set('view engine','ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
})


//routs
app.get('/',(req,res)=>{
    res.redirect('/blogs')
});

app.get('/about',(req,res)=>{
    res.render('about',{ title:'About' })
});


// blogs routes
app.get('/blogs', blogRoutes);


// Error Page 404
app.use((req,res)=>{
    res.sendStatus(404).render('404',{ title :'404'});
});

