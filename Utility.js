class Queue {

    constructor() {
        this.data = [];
        this.rear = 0;
        this.size = 10;
    }
    /** method for push the element */
    enqueue = (element) => {
        if (this.rear < this.size) {
            this.data[this.rear] = element;
            this.rear = this.rear + 1;
            return this.rear;   // return the element
        }
    }
    /** method for check the data is empty or not */
    isEmpty = () => {
        return this.rear === 0;
    }
    /** method for delete the element */
    dequeue = () => {
        if (this.isEmpty() === false) {
            this.rear = this.rear - 1;
            return this.data.shift(); //return the deleted element
        }
    }
    /** To display the element of the queue */
    print = () => {
        for (let i = 0; i < this.rear; i++) {
            console.log(this.data[i]);
        }
    }
    /** method for find the front element */
    getFront = () => {
        if (this.isEmpty() === false) {
            return this.data[0]; //return the front element of queue
        }
    }
    /** method for find the last element */
    getLast = () => {
        if(this.isEmpty() === false) {
             return this.data[ this.rear - 1 ] ; // return last element of queue
        }
     }
}
module.exports = new Queue();