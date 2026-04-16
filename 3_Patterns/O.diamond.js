let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let n = Number(input);

for(let i= 1; i <= n; i++){
    let row = ""; 

    for(let j = 1; j <= n-i; j++){
        row += " ";
    }

    for(let j = 1; j <= i; j++){
        row += " *";
    }
    console.log(row);
}
for(let i= n-1; i >= 1; i--){
    let row = ""; 

    for(let j = 1; j <= n-i; j++){
        row += " ";
    }

    for(let j = 1; j <= i; j++){
        row += " *";
    }
    console.log(row);
}
