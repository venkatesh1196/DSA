let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let n = Number(input);
for (let i = 1; i <= n; i++) {
    console.log("Hello Codeforces",i);    
}