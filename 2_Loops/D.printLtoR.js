const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
const l = parseInt(input[0]);
const r = parseInt(input[1]);
let result = [];
for(let i = l; i <= r; i++){
    result.push(i)
  }
    console.log(result.join(" "));
