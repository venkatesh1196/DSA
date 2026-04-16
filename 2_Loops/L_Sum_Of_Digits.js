//* method 0
let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let N = BigInt(input);
let sum = BigInt(0);

while(N != BigInt(0)){
    sum += N % BigInt(10);
        N = N/BigInt(10);
}
console.log(sum.toString());

//* method 1
// let fs = require('fs');
// let input = fs.readFileSync(0, 'utf8').trim();
// let sum = 0;

// for (let char of input) {
//     sum += Number(char);
// }

// console.log(sum);