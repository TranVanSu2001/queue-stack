/* //queue in object


class Queue {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) { //add item
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() { //delete first item
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  get length() {
    return this.tailIndex - this.headIndex;
  }
}

const testqueue = new Queue();
testqueue.enqueue('123');
testqueue.enqueue('tranvansu');

console.log(testqueue);
console.log(Array.isArray(testqueue));

var array = [];
console.log(array); */