//create stack Object

class Stack {
  constructor() {
    this.items = [];
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  push(item) { //add item
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  pop() { //delete first item
    if((this.tailIndex - this.headIndex) === 0) {
      console.log('This is empty') // nếu không có phần tử nào thì báo trống
    } else {
      const item = this.items[this.tailIndex - 1];
      delete this.items[this.tailIndex - 1];
      this.tailIndex--;
      return item;
    }
  }

  peek() { // return the value of tailIndex
      return this.items[this.tailIndex - 1];
  }

  currentLength() { //current length of Array
    return this.tailIndex - this.headIndex
  }
  
  isEmpty() { // return true/false
    if( (this.tailIndex - this.headIndex) === 0) {
      return true;
    } else {
      return false;
    }
  }

  clear() { //clear all data of array -> return empty array
    this.items = [];
  }
}

var stack = new Stack();

 //push(), pop(), peek(), currentLength(), isEmpty(), clear()

console.log(stack)







