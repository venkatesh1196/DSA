let v = require('fs');
let input = v.readFileSync(0, 'utf8').trim();
let  n = Number(input);
for(let i = n; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= i; j++){
        if(i == 1 || i == n || j == 1 || j == i){
            row += "*";
        }else{
            row += " ";
        }
    }
        console.log(row);
}