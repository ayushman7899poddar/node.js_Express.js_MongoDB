        // EVENTS MODULE
//Node.js has a built in module called events.
//where you can create-, fire-, and listen for your own events.

//example1: registering for the events to be fired only one time using once.
//example2: create an event emmiter instances and register a couple of callbacks.
//example3: registering for the event with callback parameters.

const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayName",()=>{
    console.log("your name is ayushman poddar");
})
event.on("sayName",()=>{
    console.log("your name is ayushman poddar");
})

event.emit("sayName");

//function define:
event.on("checkPage",(sc,msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

//function call:
event.emit("checkPage",200,"ok");
