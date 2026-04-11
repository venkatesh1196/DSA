let fs = require('fs');
let input = (fs.readFileSync(0, 'utf8').trim().split(/\s+/));
let n = Number(input[0]);
let m = Number(input[1]);
for(let i = 1; i <= n ; i++){
    let row = "";
    for(let j = 1; j <= m; j++){
        if(i == 1 || i == n || j == 1 ||j == m){

             row += "*";

        }else{
       
            row += " ";
        }
    }
    console.log(row);
}