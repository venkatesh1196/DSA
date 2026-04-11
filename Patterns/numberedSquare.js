let v = require('fs');
let input = v.readFileSync(0, 'utf8').trim();
let  n = Number(input);
for(let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1; j <= i; j++){
        row += i;        
    }
    console.log(row);
}