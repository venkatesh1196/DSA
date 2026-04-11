let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let N = Number(input[0]);
let M = Number(input[1]);
let x = N % 10;
let y = M % 10;
console.log(x + y);
