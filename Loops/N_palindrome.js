let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let N = BigInt(input);
let temp = N;
if (N === 0n){
    console.log("YES");
} else {
    let reversed = 0n;
    while (N != 0n) {
        let digit = (N % 10n);
        reversed = (reversed * 10n) + digit;
        N = Math.floor(N / 10n);
    }
    if (temp === reversed){
        console.log("YES");  
    } else{
        console.log("NO");  
    }
}

