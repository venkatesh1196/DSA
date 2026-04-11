let v = require('fs');
let input = v.readFileSync(0, 'utf8').trim().split(/\s+/);
let  n = Number(input[0]);
let  m = Number(input[1]);
for(let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1; j <= m; j++){
        row += i;        
    }
    console.log(row);
}