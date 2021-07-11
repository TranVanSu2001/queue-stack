// QUEUE ARRAY

class QueueArray {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    this.items.shift();
  }

  peek() {
    if( this.items.length == 0) {
      console.log('This is empty')
    } else {
      return this.items[0];
    }
  }

  length() {
    return this.items.length;
  }
}

let queue = new QueueArray();

queue.enqueue('case 1')
queue.enqueue('case 2')

queue.enqueue('case 3')
queue.enqueue('case 4')
queue.enqueue('case 5')
queue.enqueue('case 6')

queue.dequeue()
console.log('first element:' ,queue.peek())
console.log('length:' ,queue.length());

console.log(queue)