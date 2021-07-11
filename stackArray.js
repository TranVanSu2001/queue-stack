// STACK ARRAY

class stackArray {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }
  
  pop() {
    if(this.items.length === 0) {
      console.log('This is empty')
    } else {
      this.items.pop();
    }
  } 
   
  peek() {
    return this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0;
  }

  length() {
    return this.items.length;
  }
}

let stack = new stackArray();
stack.push('case 1')
stack.push('case 2')
stack.push('case 3')
stack.push('case 4')
stack.push('case 5')

stack.pop();
stack.pop();

console.log(stack.peek());

console.log(stack.items.length);

console.log(stack.length());
console.log(stack.isEmpty())

console.log(stack);
