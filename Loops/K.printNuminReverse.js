//* below method don't preserve the 0
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
// let n = parseInt(input[0]);
// let result = 0;
// while(n != 0){
//     result = (result*10) + n % 10;
//     n = Math.floor(n / 10);
// }
// console.log(result);

//* (best) method 1
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim();
// const result = input.split('').reverse().join('');
// console.log(result);

//* method 2 
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim();
// let result = "";
// for (let i = input.length - 1; i >= 0; i--) {
//     result += input[i];
// }
// console.log(result);

//* method 3
// const fs = require('fs');
// const input = fs.readFileSync(0, 'utf8').trim();
// let n = BigInt(input);
// let result = "";
// while (n > 0n) {
//     result += (n % 10n).toString();
//     n /= 10n;
// }
// console.log(result);

//* method 4
let fs = require('fs');
let n = parseInt(fs.readFileSync(0, 'utf8').trim());
let result = "";
while(n != 0){
result += n%10;
n = Math.floor(n/10);
}
console.log(result);
