let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let N = Number(input);

if (N === 0){
    console.log(0);
} else {
    let reversed = 0;
    while (N != 0) {
        let digit = N % 10;
        reversed = (reversed * 10) + digit;
        N = Math.floor(N / 10);
    }
    console.log(reversed);  
}
 