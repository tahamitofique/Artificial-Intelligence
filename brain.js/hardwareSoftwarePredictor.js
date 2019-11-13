const brain = require('brain.js');
const data = require('./data/data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input:item.text,
    output:item.category
}));

network.train(trainingData,{
    iterations:200
});

const output=network.run('pendrive');
console.log(`category: ${output}`);
