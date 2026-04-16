const fs = require('fs');
let input = fs.readFileSync(0, 'utf8');
let N = parseInt(input);
if(N%2 == 0){
    console.log("Even");
}
else{
    console.log("Odd");
}