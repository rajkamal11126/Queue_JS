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
    isEmpty() {

        return this.rear === 0;
    }
    /** method for delete the element */
    dequeue() {

        if (this.isEmpty() === false) {

            this.rear = this.rear - 1;
            return this.data.shift(); //return the deleted element
        }
    }
}
module.exports = new Queue();