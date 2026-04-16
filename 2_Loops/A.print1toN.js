const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
const n = parseInt(input);
for(let i = 1; i <= n; i++){
    console.log(i);
}