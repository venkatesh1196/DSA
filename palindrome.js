// let fs = require('fs');
// let n = (fs.readFileSync(0, 'utf8').trim().split(/\s+/));
// let temp = n;
// // let input = n.reverse().join();
// // console.log(n == input)

// let result = "";
// while(n != 0){
//     result += (n % 10);
//     n = Math.floor(n / 10);
//     }
// console.log(result);
// console.log(temp);


let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let reverse = input.split('').reverse().join('');
console.log(input == reverse);
