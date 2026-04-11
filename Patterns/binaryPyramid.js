//* method 1
// let v = require('fs');
// let input = v.readFileSync(0, 'utf8').trim().split(/\s+/);
// let  n = Number(input[0]);
// let  m = Number(input[1]);
// let num = 0;
// for(let i = 1; i <= n; i++){
//     let row = "";
//     if(i % 2 == 0){
//             num = 1;
//         }else{
//             num = 0;
//         }
//     for(let j = 0; j < i; j++){
//         row += num;
//         if(num == 0)
//         num = 1;
//         else
//         num = 0;
//     }
//         console.log(row);

//     }

//* method 2

let v = require('fs');
let input = v.readFileSync(0, 'utf8').trim();
let  n = Number(input);
let num = 0;
for(let i = 1; i <= n; i++){
    let row = "";
    if(i % 2 == 0){
            num = 1;
        }else{
            num = 0;
        }
    for(let j = 0; j < i; j++){
        num = num%2;
        row += num;
        num++;
    }
        console.log(row);
    }
    