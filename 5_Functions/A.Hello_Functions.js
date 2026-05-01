let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let N = parseInt(input);
function learningFunctions(N) {
    for(let i = 1; i <= N; i++)
    console.log("I am learning functions");
}
learningFunctions(N);