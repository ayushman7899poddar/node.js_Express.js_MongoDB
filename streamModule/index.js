//2nd way: Reading from a stream
//creating a readable streams
//handle stream events -> data,end,and error.


const fs=require("fs");
const http = require("http");

const server = http.createServer();

server.on("request",(req,res) =>{
    
    // fs.readFile("input.txt",(err,data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    const rstream = fs.createReadStream("input.txt");
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });
    rstream.on("end",()=>{
        res.end();
    });
    rstream.on('error',(err)=>{
        console.log(err);
        console.log("file not found");
    })
});

server.listen(5000,"127.0.0.1")