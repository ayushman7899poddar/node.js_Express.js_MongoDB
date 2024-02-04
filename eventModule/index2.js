const EventEmitter = require("events");

const event  = new EventEmitter();

// event.on("saved",(arg) =>{
//     console.log(`a saved event occured : name:${arg.name}, id:${arg.id}`);
// });

// declare the event handler:
function log(arg){
    console.log(`a saved event occured : name:${arg.name}, id:${arg.id}`);
}

// attach the event listener to the saved event:
event.on("saved",log);

//emit the saved event:
event.emit("saved",{
    id:1,
    name:'ayushman'
});

//remove the event listener:
event.off("saved",log);

//no effect:
event.emit("saved",{
    id:2,
    name:"ayushman poddar"
})