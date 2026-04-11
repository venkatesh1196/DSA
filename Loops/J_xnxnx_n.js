let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let x = BigInt(input[0]);
let n = BigInt(input[1]);

if(n === 0n){
    console.log("1");
} else {
    console.log((x ** n).toString());
}