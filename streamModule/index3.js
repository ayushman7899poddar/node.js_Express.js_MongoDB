const fs = require('fs');

        //WRITABLE STREAM::

const file = fs.createWriteStream('file.txt');

file.write('jai shree krishna');
file.end(' from streams');

for(let i=0; i<10; i++)
{
    file.write("jai shree krishna : " + i);
}
file.end();

        //READABLE STREAM::
const readableStream = fs.createReadStream('file.txt',{
    highWaterMark:10
});

readableStream.on('readable',()=>{
    process.stdout.write(`[${readableStream.read()}]`);
});

readableStream.on('end',()=>{
    console.log('DONE');
});

        //DUPLEX::
// const http = require('http');

// const server = http.createServer((req,res)=>{
//     let body = '';
//     req.setEncoding('utf8');

//     req.on('data',(chunk)=>{
//         body+=chunk;
//     });

//     req.on('end',()=>{
//         console.log(body);

//         try {
//             res.write("good morning");
//             res.end();
//         } catch (error) {
//             res.statusCode = 400;
//             return res.end(`error: ${error.message}`);
//         }
//     });
// });

// server.listen(1337);

        //streamimg PIPE::
// const http = require('http');
// const server  = http.createServer();

//  server.on('request',(req,res)=>{
//     fs.readFile('file.txt',(err,data)=>{
//         if(err) throw err;
//         else{
//             res.end(data);
//         }
//     });
//  });

//  server.listen(1337);