// Include os module and create its object
const os = require("os");

// return the cpu architecture
console.log("architecture is : ",os.arch());

// It returns the amount of free system memory in bytes
const freeMemory = os.freemem();
console.log(`${freeMemory /1024/1024/1024 }`);

// It return total amount of system memory in bytes
const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);

// console.log("plateform is : ",os.platform());
// console.log("CPU details are :",os.cpus());
// console.log("User Information are :",os.userInfo());
// console.log("OS Uptime is :",os.uptime());
console.log("Current User's Home Directory :",os.homedir());
console.log("Hostname of OS is :",os.hostname());

//ENDIANNESS: the order of bits in a sequence within a binary representation of anumber.
console.log("Endianness :",os.endianness());

// It returns the platform of os
console.log('operating system platform: ' + os.platform());
 
// It returns the operating systems release.
console.log('OS release : ' + os.release());

// It returns the list of network interfaces
console.log("Network Interfaces :",os.networkInterfaces());

// returns the OS default directory for temporary files.
console.log("Temp Directory is :",os.tmpdir());
console.log("EOL marker is :",os.EOL);
console.log("Signal Constants is :",os.constants.signals);

process.on('SIGINT',()=>{
    console.log("Received SIGINT . Do something before exit. ");
})