const Utility = require('./Utility');
let readlineSync = require('readline-sync')
/** enter the element in the queue */
let element = readlineSync.question("Enter the element:");
let result = Utility.enqueue(element);
console.log(result);               

 