let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let n = Number(input);
// let n = 5;
for(let i = 1; i <= n; i++){
    
    let row = "";
    
        if(i === 1 || i === n){
            for(let j = 1; j <= n; j++){
            row += "*";
            }
        }
        else {
            for(let j = 1; j <= n-i; j++){
                row += " ";
            }
            row += "*";
        }
    console.log(row);
}