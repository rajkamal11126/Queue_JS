const Utility = require('./Utility');
let readlineSync = require('readline-sync')
/** enter the element in the queue */
let element = readlineSync.question("Enter the element:");
let enqueueElement = Utility.enqueue(element);
console.log(enqueueElement); 
/** deleted element in the queue */              
let dequeueElement = Utility.dequeue();
console.log(dequeueElement);
 