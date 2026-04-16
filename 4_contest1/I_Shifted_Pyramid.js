let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let n = Number(input);
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i-1; j++) {
        row += " ";    
    }
    for (let j = 1; j <= i; j++) {
        row += "x";        
    }
    console.log(row);
}
