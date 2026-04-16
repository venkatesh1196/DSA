let fs = require('fs');
let n = (fs.readFileSync(0, 'utf8').trim().split(/\s+/));
let n = Number(input);
// for(let i = 1; i <= n ; i++){
//     let row = "";
//     for(let j = 1; j <= n; j++){
//         if(i == 1 || i == n || j == 1 ||j == n){

//              row += "*";

//         }else{
       
//             row += " ";
//         }
//     }
//     console.log(row);
// }
console.log(n*5)
console.log(n+5)