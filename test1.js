const os = require('os');
console.log("SO: ",os.platform());
console.log("Release: ", os.release());
console.log("Mem libre: ",os.freemem()," Bytes");
