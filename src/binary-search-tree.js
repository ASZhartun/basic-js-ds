const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.ancient = null;
  }

  root() {
    return this.ancient;
  }

  add(data) {
    let currentNode = new Node(data);
    if (this.ancient === null) {
      this.ancient = currentNode;
    } else {
      this.addNodeOnSubTree(this.ancient, currentNode);
    }
  }

  addNodeOnSubTree(root, node) {
    if (node.data < root.data) {
      if (root.left === null) root.left = node;
      else this.addNodeOnSubTree(root.left, node);
    } else if (node.data > root.data) {
      if (root.right == null) root.right = node;
      else this.addNodeOnSubTree(root.right, node);
    }
  }

  move(node, action, inputNode) {
    if (node!==null) {
      this.move(node.left, action, inputNode);
      action(node);
      this.move(node.right, action, inputNode);
    }
  }

  action(node) {
    console.log(`current node: ${node.data}`);
  }

  has(data) {
    let searchingItem = new Node(data);
    if (this.ancient === null) {
      return false;
    } else {
      return this.findSpecifiedItem(this.ancient, searchingItem)!==null;
    }
  }

  find(data) {
    let searchingItem = new Node(data);
    if (this.ancient === null) {
      return null;
    } else {
      return this.findSpecifiedItem(this.ancient, searchingItem);
    }
  }

  findSpecifiedItem(currentNode, searchingNode) {
    if (currentNode !== null) {
      if (searchingNode.data > currentNode.data) {
        return this.findSpecifiedItem(currentNode.right, searchingNode);
      } else if (searchingNode.data < currentNode.data) {
        return this.findSpecifiedItem(currentNode.left, searchingNode);
      } else if (searchingNode.data == currentNode.data){
        return currentNode;
      }
    } else return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};