const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
console.log(req.url);
res.setHeader('content-type','text/html');

if (req.url=='/') {
        fs.readFile('./html/home.html',(err,data)=>{    
            if (err) {
               console.log(err);
               res.end(); 
            }else{
                res.end(data);
            }
        })
}else if (req.url=='/contact') {
    fs.readFile('./html/contact.html',(err,data)=>{
        if (err) {
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
}else if (req.url=='/shopping') {
    fs.readFile('./html/shopping.html',(err,data)=>{
        if (err) {
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
}else{
    fs.readFile('./html/about.html',(err,data)=>{
        if (err) {
           console.log(err);
           res.end(); 
        }else{
            res.end(data);
        }
    });
}

});

    server.listen(5000,'localhost',()=>{
        console.log('listening on port 5000');
    });


















