// test.js
import * as chai from 'chai';
const { assert } = chai;  // Destructure the assert function from chai
import Tree from '../Tree.js';  // Adjust the path based on your project structure
import Node from '../Node.js';

// Create a new tree instance
const tree = new Tree();

// Test 1: Check if the root is null
console.log("Checking if the root is null...");
assert.isNull(tree.root, "Root should be null");

// Add a node
tree.addNode(new Node(5));
console.log("Added node with value 5.");
assert.isNotNull(tree.root, "Root should not be null");
assert.strictEqual(tree.root.data, 5, "Root should have data 5");

// Test 2: Add more nodes
tree.addNode(new Node(3));
console.log("Added node with value 3.");
assert.strictEqual(tree.root.left.data, 3, "Left child of root should be 3");

tree.addNode(new Node(7));
console.log("Added node with value 7.");
assert.strictEqual(tree.root.right.data, 7, "Right child of root should be 7");

// Test 3: Check for non-existent nodes
console.log("Checking if node with value 4 exists...");
assert.isFalse(tree.hasNode(4), "Tree should not contain node with data 4");

// If all tests pass, output a success message
console.log("All tests passed successfully!");
