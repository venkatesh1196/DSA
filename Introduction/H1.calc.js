const fs = require('fs');

// Read input from stdin (standard input)
const input = fs.readFileSync(0, 'utf8').split(/\s+/);
const N = parseInt(input[0]);
const M = parseInt(input[1]);

// Use Template Literals (backticks) to include the variables in the string
console.log(`${N} + ${M} = ${N + M}`);
console.log(`${N} - ${M} = ${N - M}`);
console.log(`${N} * ${M} = ${N * M}`);
console.log(`${N} / ${M} = ${Math.floor(N / M)}`);
console.log(`${N} % ${M} = ${N % M}`);