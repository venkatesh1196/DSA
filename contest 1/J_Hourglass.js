let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let N = Number(input);

for(let i = N; i >= 1; i--){
    let row = "";
    for(let j = 1; j <= N-i; j++){
        row += " ";
    }
    for(let j = 1; j <= i; j++){
        if (i === N && j === 1){
            row += "."
        }
        else
        row += " .";
    }
    console.log(row);
}
for(let i = 2; i <=N; i++){
    let row = "";
    for(let j = 1; j <= N-i; j++){
        row += " ";
    }
    for(let j = 1; j <= i; j++){
        if (i === N && j === 1){
            row += "."
        }
        else
        row += " .";
    }
    console.log(row);
}
