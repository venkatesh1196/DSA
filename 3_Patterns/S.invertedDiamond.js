let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let n = Number(input);

for( let i = n; i >= 2; i--){
    let row = "";

    for(let j = 1; j <= i; j++){
        row += "*";
    }
    if(i === n){
        row += " ";
    } else {
    for(let j = 1; j<= (n-i)*2+1; j++){
        row += " ";
    }
    }

    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}

for( let i = 1; i <= n; i++){
    let row = "";

    for(let j = 1; j <= i; j++){
        row += "*";
    }
    
    if(i === n){
        row += " ";
    } else {
    for(let j = 1; j<= (n-i)*2+1; j++){
        row += " ";
    }
    }

    for(let j = 1; j <= i; j++){
        row += "*";
    }
    console.log(row);
}