const Graph = require('./Graph');
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

const graph = new Graph();
for (let i = 0; i < myVertices.length; i++) graph.addVertex(myVertices[i]);
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('-----------------Initial state-----------------');
console.log(graph.toString());
console.log('-----------------Size-----------------');
console.log(`Graph size: ${graph.size}`);
console.log('-----------------Order-----------------');
console.log(`Graph order${graph.order}`);
console.log('-----------------Is adjacent-----------------');
console.log(graph.isAdjacent('A', 'G')); // -> False
console.log(graph.isAdjacent('E', 'I')); // -> True
console.log('-----------------Remove edge-----------------');
console.log(`Graph order${graph.order}`);
graph.removeEdge('E', 'I');
console.log(`Graph order${graph.order}`);
console.log('-----------------Remove vertex-----------------');
console.log(`Graph size: ${graph.size}`);
graph.removeVertex('A');
console.log(`Graph size: ${graph.size}`);
console.log('-----------------Final State-----------------');
console.log(graph.toString());
