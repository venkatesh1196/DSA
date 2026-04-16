let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let N = Number(input);

for(let i = N; i >= 2; i--){
    let row = "";
    for(let j = 1; j <= N-i; j++){
        row += " ";
    }
    for(let j = 1; j <= i; j++){
        if (j === i)
            row += ".";
        else
            row += ". "
    }
    console.log(row);
}

for(let i = 1; i <=N; i++){
    let row = "";
    for(let j = 1; j <= N-i; j++){
        row += " ";
    }
    for(let j = 1; j <= i; j++){
        if (j === i)
            row += ".";
        else
            row += ". "
    }
    console.log(row);
}
