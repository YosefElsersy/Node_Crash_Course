const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
console.log(req.url);
res.setHeader('content-type','text/html');

if (req.url=='/') {
        fs.readFile('./index.html',(err,data)=>{    
            if (err) {
               console.log(err);
               res.end(); 
            }else{
                res.end(data);
            }
        })
}else{
    fs.readFile('./test.html',(err,data)=>{
        if (err) {
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
}

});
server.listen(5000,'localhost',()=>{
    console.log('listening on port 5000');
});