const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.storage = [];
  }

  getUnderlyingList() {
    for (let i = 0; i < this.storage.length - 1; i++) {
      this.storage[i].next = this.storage[i+1];
    }
    return this.storage[0];
  }

  enqueue(value) {
    this.storage.push(new ListNode(value, null));
  }

  dequeue() {
    if (this.storage.length == 0) {
      return -1;
    } else {
      return this.storage.shift().value;
    }
  }
}

module.exports = {
  Queue
};
