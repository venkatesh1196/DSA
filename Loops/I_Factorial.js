let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let N = Number(input);
let F = BigInt(1);

if(N === 0){
    console.log("1");
} else {
    for(let i = 1; i <= N; i++){
    
       F *= BigInt(i);
 }
 console.log(F.toString());
}
