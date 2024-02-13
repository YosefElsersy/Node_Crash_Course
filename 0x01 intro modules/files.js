const fs = require('fs');

// fs.readFile(`./blog1.txt`,(err,data)=>{
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


fs.writeFile(`./blog1.txt`,'hello , egypt',()=>{
    console.log('file was writen');
});


// if (!fs.existsSync('./assests')) {
//     fs.mkdir('./assests',(err)=>{
//         if (err) {
//                 console.log(err);
//         }
//         console.log('folder created');
//     })
// }else{
//     fs.rmdir('./assests',(err)=>{
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     })
// }


if(fs.existsSync('./deleteme.txt')) {
    fs.unlink('./deleteme.txt',(err)=>{
        if (err) {
           console.log(err); 
        }
        console.log('file deleted');
    })
}
