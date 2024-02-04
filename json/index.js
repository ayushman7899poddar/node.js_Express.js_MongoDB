//JSON  stands for javascript object notation .
// JSON is a lighweight format for storing and transporting data.
//JSON is often used when data is sent form a server to a web page:

 const bioData = {
    name: "ayushman Poddar",
    age:20,
    channel:"jai hind jai bharat",
 };

 console.log(bioData.channel);
 console.log(bioData.name);


//stringify -> OBJECT TO JSON.
//parse -> JSON TO OBJECT.

 const dataJson = JSON.stringify(bioData);
 console.log(dataJson);

const objData = JSON.parse(dataJson);
console.log(objData);


//1: convert to JSON.
//2: add it to another file.
//3. readfile.
//4. again conert back to js obj oriented.
//5. console.log.

const fs = require("fs");

 const jsonData = JSON.stringify(bioData);

 fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("done");
 });

 fs.readFile("json1.json","utf-8",(err,data)=>{
    
    const org_data = JSON.parse(data);
    console.log(data);
    console.log(org_data);
 });