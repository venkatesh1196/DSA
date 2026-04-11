let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let n = Number(input);
for(let i = 1; i <= n; i++){
    let row = "";
    // n-i spaces
    for(let j = 1; j <= n-i; j++){
        row += " ";
    }
    // i stars
    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}
