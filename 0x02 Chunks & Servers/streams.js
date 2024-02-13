const fs = require('fs');

const readstream= fs.createReadStream('./blog2.txt',{encoding:'utf8' , highWaterMark:50})
const writest= fs.createWriteStream('./blog3.txt');

readstream.on('data',(chunk)=>{
    // console.log("_____________New Chunk________________");
    // writest.write(chunk)
    writest.write('=====New Chunk=====')
    console.log(chunk + '\n\nHi\n\n');
})