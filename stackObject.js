//QUEUE OBJECT


class stackObject {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  push(item) { 
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  pop() { 
    if(this.tailIndex === this.headIndex) {
      console.log('This is empty') // nếu không có phần tử nào thì báo trống
    } else {
      const item = this.items[this.tailIndex - 1];
      delete this.items[this.tailIndex - 1];
      this.tailIndex--;
      return item;
    }
  }

  peek() { 
      return this.items[this.tailIndex - 1];
  }

  length() { 
    return this.tailIndex - this.headIndex
  }
  
  isEmpty() {
    if( this.tailIndex = this.headIndex) {
      return true;
    } else {
      return false;
    }
  }
}

let stack = new stackObject();


 stack.push('case 1')
 stack.push('case 2')
 stack.push('case 3')
 stack.push('case 4')

stack.pop()


// stack.pop();
console.log('final case:',stack.peek());

console.log('object length:',stack.length());
console.log(stack);



