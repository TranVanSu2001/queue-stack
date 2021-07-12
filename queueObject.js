//QUEUE OBJECT


class queueObject {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    if(this.tailIndex === this.headIndex) {
      console.log('This is empty') // nếu không có phần tử nào thì báo trống
    } else {
      const item = this.items[this.headIndex];
      delete this.items[this.headIndex];
      this.headIndex++;
      return item;
    }
  }

  peek() {
    return this.items[this.headIndex];
  }

  length() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new queueObject();

queue.enqueue('case 1');
queue.enqueue('case 2');
queue.enqueue('case 4');
queue.enqueue('case 5');
queue.enqueue('case 6');

queue.dequeue()
queue.dequeue()

console.log( 'first element:',queue.peek())


console.log(queue.length())


console.log(queue);
