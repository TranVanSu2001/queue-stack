// //queue in object


// class Queue {
//   constructor() {
//     this.items = {};
//     this.headIndex = 0;
//     this.tailIndex = 0;
//   }

//   enqueue(item) {
//     this.items[this.tailIndex] = item;
//     this.tailIndex++;
//   }

//   dequeue() {
//     const item = this.items[this.headIndex];
//     delete this.items[this.headIndex];
//     this.headIndex++;
//     return item;
//   }

//   peek() {
//     return this.items[this.headIndex];
//   }

//   get length() {
//     return this.tailIndex - this.headIndex;
//   }
// }

// const testqueue = new Queue();
// //test add
// testqueue.enqueue('123');
// testqueue.enqueue('Tranvansu');
// testqueue.enqueue('CreateQueue');
// testqueue.enqueue('Success!');

// //test delete
// testqueue.dequeue();
// testqueue.dequeue();



// console.log(testqueue);
