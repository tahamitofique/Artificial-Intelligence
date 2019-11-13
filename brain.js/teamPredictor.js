const brain = require ('brain.js');
const network=new brain.NeuralNetwork();

network.train([
    { input:[1,2], output: [1]},    //team 2
    { input:[1,3], output: [1]},    //team 3
    { input:[2,3], output: [0]},    //team 2
    { input:[2,4], output: [1]},    //team 4
    { input:[1,2], output: [1]},    //team 2
    { input:[1,3], output: [1]},    //team 3
    { input:[3,4], output: [0]},    //team 3
    { input:[1,4], output: [0]}     //team 1
]);

const val={
    a:3,
    b:4
};
const output=network.run([val.a,val.b]);

console.log(`Winner team:: ${output>0.5?val.b:val.a} ...${output}`);