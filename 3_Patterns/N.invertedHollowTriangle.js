let fs = require('fs');
let input = fs.readFileSync(0, 'utf8').trim();
let n = Number(input);

for(let i = n; i >= 1; i--){
    let row = "";
    
    for(let j = 1; j <= n-i; j++){
        row += " ";
    }
    
    if(i === 1){
        row += "*";
    }
    else if(i === n){
        for(let j = 1; j <= n; j++){
            if(j === n)
            row += "*";
            else
            row += "* ";
        }
    }
        else{
            row += "*";
            for(let j = 1; j <= (i-2)*2; j++){
                row += " ";
            }
            row += " *"
        }
        console.log(row);    
}
