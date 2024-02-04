const path = require("path");

console.log(path.dirname('<C: />Users/<C: />Lenovo/<C: />Desktop/<C: />Documents/<C: />Node_JS/<C: />pathModule/<C: />pathmod.js'));

console.log(path.extname('<C: />Users/<C: />Lenovo/<C: />Desktop/<C: />Documents/<C: />Node_JS/<C: />pathModule/<C: />pathmod.js'));

console.log(path.basename('<C: />Users/<C: />Lenovo/<C: />Desktop/<C: />Documents/<C: />Node_JS/<C: />pathModule/<C: />pathmod.js'));

const myPath = path.parse('<C: />Users/<C: />Lenovo/<C: />Desktop/<C: />Documents/<C: />Node_JS/<C: />pathModule/<C: />pathmod.js');
console.log(myPath.name);
 
console.log(path.isAbsolute('<C: />Users/<C: />Lenovo/<C: />Desktop/<C: />Documents/<C: />Node_JS/<C: />pathModule/<C: />pathmod.js'));

console.log(path.win32);

console.log(path.normalize('<C: />Users/<C: />Lenovo/<C: />Desktop/<C: />Documents/<C: />Node_JS/<C: />pathModule/<C: />pathmod.js'));

console.log(path.join('<C: />Users/<C: />Lenovo/<C: />Desktop/<C: />Documents/<C: />Node_JS/<C: />pathModule/<C: />pathmod.js'));